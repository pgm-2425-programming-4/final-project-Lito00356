import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
// import { Pagination } from "./components/backlog/pagination/pagination";
import "./App.css";
import { PaginatedBacklog } from "./components/backlog/paginated-backlog";

const queryClient = new QueryClient();

export default function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <PaginatedBacklog /> */}
      <h1 className="title">Project Title</h1>
      <section className="tasks-container">
        <div className="tasks" id="to-do">
          <strong className="tasks__title">To Do</strong>
          {/* <article className="tasks__item">
            <form className="form">
              <label className="form__label">
                <input className="form__input" type="text" placeholder="Title" />
              </label>
            </form>
          </article> */}
          <AddTask />
        </div>
        <div className="tasks" id="in-progress">
          <strong className="tasks__title">In progress</strong>
          <article className="tasks__item">
            <form className="form">
              <label className="form__label">
                <input className="form__input" type="text" placeholder="Title" />
              </label>

              <textarea className="form__textarea" type="text" placeholder="Description"></textarea>
            </form>
          </article>
        </div>

        <div className="tasks" id="in-progress">
          <strong className="tasks__title">Ready for review</strong>
          <article className="tasks__item">
            <form className="form">
              <label className="form__label">
                <input className="form__input" type="text" placeholder="Title" />
              </label>

              <textarea className="form__textarea" type="text" placeholder="Description"></textarea>
            </form>
          </article>
        </div>

        <div className="tasks" id="in-progress">
          <strong className="tasks__title">Done</strong>
          <article className="tasks__item">
            <form className="form">
              <label className="form__label">
                <input className="form__input" type="text" placeholder="Title" />
              </label>

              <textarea className="form__textarea" type="text" placeholder="Description"></textarea>
            </form>
          </article>
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
        <button className="button hamburger" id="closed-menu">
          <svg className="hamburger-opened" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        </button>
        <button className="button" id="opened-menu">
          <svg className="hamburger-opened" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [hideAddTask, setHideAddTask] = useState(false);

  function handleAddClick() {
    setShowForm(true);
    setHideAddTask(true);
  }

  function addToTaskList() {
    const newTask = {
      id: Date.now(),
      status: "done",
      title: "",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setHideAddTask(false);
  }

  return (
    <>
      {showForm ? (
        <article className="tasks__item">
          <form className="form">
            <label className="form__label">
              <input className="form__input" type="text" placeholder="Title" />
            </label>
            <div className="form__commit">
              <button className="button" onClick={addToTaskList}>
                Add to list
              </button>
              <button className="button form__close">X</button>
            </div>
          </form>
        </article>
      ) : null}

      <button className="button" onClick={handleAddClick} style={{ display: hideAddTask ? "none" : "inline-block" }}>
        + Add Task
      </button>
    </>
  );
}
