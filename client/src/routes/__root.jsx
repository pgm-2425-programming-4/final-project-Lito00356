import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ProjectMenu } from "../components/project-menu/ProjectMenu";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="app-header">
        <nav>
          <Link to="backlog">Backlog</Link>
        </nav>
      </header>
      <main className="root">
        <Outlet />
      </main>
      {/* <TanStackRouterDevtools initialIsOpen={false} /> */}
    </>
  ),
});
