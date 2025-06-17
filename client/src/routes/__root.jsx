import * as React from "react";
import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ProjectMenu } from "../components/project-menu/project-menu";
import { SearchBar } from "../components/search-bar/SearchBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <main>
        <div className="menu-items">
          <ProjectMenu />

          <div className="flex">
            <SearchBar />
          </div>
        </div>
        <Outlet />
      </main>
      {/* <TanStackRouterDevtools initialIsOpen={false} /> */}
    </>
  ),
});
