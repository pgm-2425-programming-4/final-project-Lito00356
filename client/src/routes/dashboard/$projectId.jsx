import React from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getProjectById } from "../../queries/get-projects";

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
      <div>
        <h1>{project.attributes.name}</h1>
      </div>
    );
  },
});
