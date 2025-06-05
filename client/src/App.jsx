import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { PaginatedBacklog } from "./components/backlog/paginated-backlog";
import { AddTask } from "./components/add-task/Task";
import { ProjectMenu } from "./components/project-menu/ProjectMenu";
import { SearchBar } from "./components/search-bar/SearchBar";

const queryClient = new QueryClient();

export default function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="title">Project Title</h1>
      <section className="tasks-container">
        <div className="tasks" id="to-do">
          <strong className="tasks__title">To Do</strong>
          <AddTask />
        </div>

        <div className="tasks" id="in-progress">
          <strong className="tasks__title">In progress</strong>
          <AddTask />
        </div>

        <div className="tasks" id="in-progress">
          <strong className="tasks__title">Ready for review</strong>
          <AddTask />
        </div>

        <div className="tasks" id="in-progress">
          <strong className="tasks__title">Done</strong>
          <AddTask />
        </div>
      </section>

      <div className="menu-items">
        <ProjectMenu />

        <SearchBar />
      </div>
    </QueryClientProvider>
  );
}
