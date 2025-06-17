import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="app-header">
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
});
