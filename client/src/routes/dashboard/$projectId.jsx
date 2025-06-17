import React from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getProjectById } from "../../queries/get-project-by-id";
import { DisplayTask } from "../../components/task";
import { AddTaskButton } from "../../components/add-task/add-task";
import { ProjectMenu } from "../../components/project-menu/project-menu";
import { SearchBar } from "../../components/search-bar/SearchBar";

export const Route = createFileRoute("/dashboard/$projectId")({
  component: function DashboardProject() {
    const { projectId } = Route.useParams();

    const {
      data: project,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["project", projectId],
      queryFn: () => getProjectById(projectId),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading project.</div>;
    if (!project) return <div>Project not found.</div>;

    const allTaks = project.tasks;

    console.log(allTaks);

    const statusColumn = {
      toDo: [],
      inProgress: [],
      readyForReview: [],
      done: [],
    };

    allTaks.forEach((task) => {
      const progStatus = task.progress_status?.progStatus;
      if (progStatus === "toDo") {
        statusColumn.toDo.push(task);
      } else if (progStatus === "inProgress") {
        statusColumn.inProgress.push(task);
      } else if (progStatus === "readyForReview") {
        statusColumn.readyForReview.push(task);
      } else if (progStatus === "done") {
        statusColumn.done.push(task);
      }
    });

    return (
      <>
        <h1 className="title">{project.projectName}</h1>
        <section className="tasks-container">
          <div className="tasks" id="to-do">
            <strong className="tasks__title">To Do</strong>
            <ul className="task">
              {statusColumn.toDo.map((task) => (
                <DisplayTask key={task.id} task={task} tags={task.tags} />
              ))}
            </ul>
            <AddTaskButton />
          </div>

          <div className="tasks" id="in-progress">
            <strong className="tasks__title">In progress</strong>
            <ul className="task">
              {statusColumn.inProgress.map((task) => (
                <DisplayTask key={task.id} task={task} tags={task.tags} />
              ))}
            </ul>
            <AddTaskButton />
          </div>

          <div className="tasks" id="in-progress">
            <strong className="tasks__title">Ready for review</strong>
            <ul className="task">
              {statusColumn.readyForReview.map((task) => (
                <DisplayTask key={task.id} task={task} tags={task.tags} />
              ))}
            </ul>
            <AddTaskButton />
          </div>

          <div className="tasks" id="in-progress">
            <strong className="tasks__title">Done</strong>
            <ul className="task">
              {statusColumn.done.map((task) => (
                <DisplayTask key={task.id} task={task} tags={task.tags} />
              ))}
            </ul>
            <AddTaskButton />
          </div>
        </section>

        <div className="menu-items">
          <ProjectMenu />

          <div className="flex">
            <SearchBar />
          </div>
        </div>
      </>
    );
  },
});
