import { createFileRoute } from "@tanstack/react-router";
import { PaginatedBacklog } from "../components/backlog/paginated-backlog";

export const Route = createFileRoute("/backlog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main className="backlog-container">
        <div>
          <h1>Backlog</h1>
          <ul>
            <li>project1</li>
            <li>project2</li>
            <li>project3</li>
          </ul>
        </div>
        <div>
          <h2>for Project title</h2>
          <PaginatedBacklog />
        </div>
      </main>
    </>
  );
}
