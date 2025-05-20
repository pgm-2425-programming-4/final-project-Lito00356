import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Pagination } from "./components/backlog/pagination/pagination";
import "./App.css";
import { PaginatedBacklog } from "./components/backlog/paginated-backlog";

const queryClient = new QueryClient();

export default function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaginatedBacklog />
    </QueryClientProvider>
  );
}
