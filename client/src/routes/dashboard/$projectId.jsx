import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getProjectById } from "../../queries/get-project-by-id";
import { DisplayTask } from "../../components/task";
import { AddTaskButton } from "../../components/add-task/add-task";
import { API_TOKEN, API_URL } from "../../constants/constants";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { ProjectMenu } from "../../components/project-menu/project-menu";

export const Route = createFileRoute("/dashboard/$projectId")({
  component: function DashboardProject() {
    const { projectId } = Route.useParams();
    const {
      data: project,
      isLoading,
      error,
      refetch,
    } = useQuery({
      queryKey: ["project", projectId],
      queryFn: () => getProjectById(projectId),
    });

    const [tasks, setTasks] = useState([]);
    const [isDragged, setIsDragged] = useState(null);
    const [isDragOver, setIsDragOver] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
      if (project?.tasks) {
        setTasks(project.tasks);
      }
    }, [project]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading project.</div>;
    if (!project) return <div>Project not found.</div>;

    const allTasks = tasks;

    const statusColumn = {
      toDo: [],
      inProgress: [],
      readyForReview: [],
      done: [],
      backlog: [],
    };

    const statusID = {
      toDo: 7,
      inProgress: 3,
      readyForReview: 5,
      done: 1,
    };

    const IDStatus = {
      7: "toDo",
      3: "inProgress",
      5: "readyForReview",
      1: "done",
    };

    allTasks.forEach((task) => {
      const prog = task.progress_status;
      let key = "backlog";
      if (prog) {
        key = prog.progStatus;
      }

      if (statusColumn[key]) {
        statusColumn[key].push(task);
      } else {
        statusColumn.backlog.push(task);
      }
    });

    async function handleDrop(e, statusId) {
      e.preventDefault();
      setIsDragOver(false);

      try {
        const taskData = JSON.parse(e.dataTransfer.getData("application/json"));
        if (!taskData) {
          return;
        }
        if (taskData.progress_status && taskData.progress_status.id === statusId) {
          return;
        }

        const request = {
          data: {
            progress_status: statusId,
          },
        };

        const response = await fetch(`${API_URL}/tasks/${taskData.documentId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify(request),
        });

        if (!response.ok) {
          const result = await response.json().catch(() => ({}));

          throw new Error("Something went wrong " + result);
        }

        await refetch();
      } catch (error) {
        console.error("Something went wrong " + error);
      }
    }

    function handleDragOver(e, statusId) {
      e.preventDefault();
      setIsDragOver(statusId);
      e.dataTransfer.dropEffect = "move";
    }

    function handleLeave(e) {
      e.preventDefault();
      setIsDragOver(null);
    }

    async function handleAddTask(title, status) {
      const requestBody = {
        data: {
          title,
          progress_status: status,
          project: projectId,
        },
      };
      try {
        const response = await fetch(`${API_URL}/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error("Error details:", result);
          throw new Error(`HTTP ${response.status}: ${JSON.stringify(result)}`);
        }

        await refetch();
      } catch (error) {
        console.error("Add task error:", error);
      }
    }

    async function handleDeleteTask(task) {
      try {
        const taskId = task.documentId;
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (!response.ok) {
          console.error("Delete failed:", response.status, response.statusText);
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        if (response.status === 204) {
          console.log("Task was deleted)");
        } else {
          const result = await response.json();
          console.log("Task deleted successfully:", result);
        }

        await refetch();
      } catch (err) {
        console.log(err);
      }
    }

    async function handleEditTask(task, title, description) {
      const requestBody = {
        data: {
          title,
          description,
        },
      };
      try {
        const taskId = task.documentId;
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error("Error details:", result);
          throw new Error(`${response.status}: ${JSON.stringify(result)}`);
        }

        await refetch();
      } catch (error) {
        console.error("Add task error:", error);
      }
    }

    async function handleTags(task, activeTags) {
      const requestBody = {
        data: {
          tags: activeTags,
        },
      };

      try {
        const taskId = task.documentId;
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify(requestBody),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error("Error details:", result);
          throw new Error(`${response.status}: ${JSON.stringify(result)}`);
        }

        await refetch();
      } catch (error) {
        console.error("Save tags error:", error);
      }
    }

    function handleSearch(searchValue) {
      if (!searchValue.trim()) {
        setSearchResults([]);
        return;
      }

      const query = searchValue.toLowerCase();

      const results = allTasks.filter((task) => {
        const titleMatch = task.title.toLowerCase().includes(query);
        const tagMatch = task.tags?.some((tag) => tag.tagName.toLowerCase().includes(query));
        return titleMatch || tagMatch;
      });

      setSearchResults(results);
    }

    return (
      <>
        <div className="flex baseline">
          <h1 className="title">{project.projectName}</h1>
          <small>project</small>
        </div>
        <section className="tasks-container">
          <div className={`tasks ${isDragOver === statusID.toDo && isDragged ? "drag-over" : ""}`} id="to-do" onDragOver={(e) => handleDragOver(e, statusID.toDo)} onDragLeave={handleLeave} onDrop={(e) => handleDrop(e, statusID.toDo)}>
            <strong className="tasks__title">To Do</strong>
            <ul className="task">
              {statusColumn.toDo.map((task) => (
                <DisplayTask key={task.id} task={task} allTags={project.tags} tags={task.tags} handleDelete={handleDeleteTask} handleEdit={handleEditTask} handleTags={handleTags} handleDrag={setIsDragged} />
              ))}
            </ul>
            <AddTaskButton status={statusID.toDo} onAddTask={handleAddTask} />
          </div>

          <div className={`tasks ${isDragOver === statusID.inProgress && isDragged ? "drag-over" : ""}`} id="in-progress" onDragOver={(e) => handleDragOver(e, statusID.inProgress)} onDragLeave={handleLeave} onDrop={(e) => handleDrop(e, statusID.inProgress)}>
            <strong className="tasks__title">In progress</strong>
            <ul className="task">
              {statusColumn.inProgress.map((task) => (
                <DisplayTask key={task.id} task={task} allTags={project.tags} tags={task.tags} handleDelete={handleDeleteTask} handleEdit={handleEditTask} handleTags={handleTags} handleDrag={setIsDragged} />
              ))}
            </ul>
            <AddTaskButton status={statusID.inProgress} onAddTask={handleAddTask} />
          </div>

          <div className={`tasks ${isDragOver === statusID.readyForReview && isDragged ? "drag-over" : ""}`} id="ready-for-review" onDragOver={(e) => handleDragOver(e, statusID.readyForReview)} onDragLeave={handleLeave} onDrop={(e) => handleDrop(e, statusID.readyForReview)}>
            <strong className="tasks__title">Ready for review</strong>
            <ul className="task">
              {statusColumn.readyForReview.map((task) => (
                <DisplayTask key={task.id} task={task} allTags={project.tags} tags={task.tags} handleDelete={handleDeleteTask} handleEdit={handleEditTask} handleTags={handleTags} handleDrag={setIsDragged} />
              ))}
            </ul>
            <AddTaskButton status={statusID.readyForReview} onAddTask={handleAddTask} />
          </div>

          <div className={`tasks ${isDragOver === statusID.done && isDragged ? "drag-over" : ""}`} id="done" onDragOver={(e) => handleDragOver(e, statusID.done)} onDragLeave={handleLeave} onDrop={(e) => handleDrop(e, statusID.done)}>
            <strong className="tasks__title">Done</strong>
            <ul className="task">
              {statusColumn.done.map((task) => (
                <DisplayTask key={task.id} task={task} allTags={project.tags} tags={task.tags} handleDelete={handleDeleteTask} handleEdit={handleEditTask} handleDrag={setIsDragged} />
              ))}
            </ul>
            <AddTaskButton status={statusID.done} onAddTask={handleAddTask} />
          </div>
        </section>
        <div className="menu-items">
          <ProjectMenu />
          <SearchBar handleSearch={handleSearch} />
        </div>
      </>
    );
  },
});
