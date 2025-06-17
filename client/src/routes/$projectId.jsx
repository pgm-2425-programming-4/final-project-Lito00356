import React from "react";
import { useParams, createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../queries/get-projects"; // adjust path as needed

export const Route = {
  component: function dashboard() {
    const { projectId } = useParams();

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
};
