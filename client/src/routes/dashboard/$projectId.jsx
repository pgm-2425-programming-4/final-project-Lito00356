import React from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getProjectById } from "../../queries/get-project-by-id";
import { AddTask } from "../../components/add-task/Task";
import { ProjectMenu } from "../../components/project-menu/ProjectMenu";
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

    return (
      <>
        <h1 className="title">{project.projectName}</h1>
        <section className="tasks-container">
          <div className="tasks" id="to-do">
            <strong className="tasks__title">To Do</strong>
            {/* <AddTask /> */}
          </div>

          <div className="tasks" id="in-progress">
            <strong className="tasks__title">In progress</strong>
            {/* <AddTask /> */}
          </div>

          <div className="tasks" id="in-progress">
            <strong className="tasks__title">Ready for review</strong>
            {/* <AddTask /> */}
          </div>

          <div className="tasks" id="in-progress">
            <strong className="tasks__title">Done</strong>
            {/* <AddTask /> */}
          </div>
        </section>

        <div className="menu-items">
          {/* <ProjectMenu /> */}

          <div className="flex">{/* <SearchBar /> */}</div>
        </div>
      </>
    );
  },
});
