import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Pagination } from "./components/backlog/pagination/pagination";
import "./App.css";

const queryClient = new QueryClient();

export default function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pagination />
    </QueryClientProvider>
  );
}
