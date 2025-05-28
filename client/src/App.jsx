import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AddTask } from "./components/add-task/Task";
import "./App.css";
import { PaginatedBacklog } from "./components/backlog/paginated-backlog";

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
        <div className="scroll-menu" id="menu">
          <div className="menu__current-project">
            <strong>Project title</strong>
            <a href="#">Backlog</a>
          </div>
          <div className="menu__projects">
            <strong className="menu__projects-title">Other projects</strong>
            <a href="">Project 1</a>
            <a href="">Project 2</a>
            <a href="">Project 3</a>
            <a href="">Project 4</a>
            <a href="">Project 5</a>
            <a href="">Project 6</a>
            <a href="">Project 7</a>
            <a href="">Project 8</a>
            <a href="">Project 9</a>
            <a href="">Project 10</a>
            <a href="">Project 11</a>
            <a href="">Project 12</a>
            <a href="">Project 13</a>
            <a href="">Project 14</a>
          </div>
        </div>

        <button className="button hamburger" id="opened-menu">
          <svg className="hamburger__svg" viewBox="0 -1 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Page-1" stroke="none" strokeWidth="2" fill="none" fillRule="evenodd">
                <g id="Icon-Set" transform="translate(-210.000000, -887.000000)" fill="#000000">
                  <path
                    d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z"
                    id="hamburger"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button className="button hamburger-open" id="closed-menu">
          <svg className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        </button>
        <button className="button search" id="filter">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </button>
      </div>
    </QueryClientProvider>
  );
}
