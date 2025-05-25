import { useState } from "react";

export function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [hideAddToList, setHideAddToList] = useState(false);
  const [title, setTitle] = useState("");

  function handleAddClick() {
    setShowForm(true);
    setAddTask(true);
  }

  function closeForm(event) {
    event.preventDefault();
    setShowForm(false);
    setAddTask(false);
  }

  function addTaskToList(event) {
    event.preventDefault();
    setTasks([...tasks, title]);
    setTitle("");
    setHideAddToList(true);
    setAddTask(false);
  }

  return (
    <>
      {showForm ? (
        <article className="tasks__item">
          <form className="form">
            <label className={`form__label ${addTask ? "" : "form__label--none"}`}>
              <input className="form__input" type="text" placeholder="Title" />
            </label>
            <div
              className="form__commit"
              style={{
                display: hideAddToList ? "none" : "flex",
              }}
            >
              <button className="button" onClick={addTaskToList}>
                Add to list
              </button>
              <button className="button form__close" onClick={closeForm}>
                X
              </button>
            </div>
          </form>
        </article>
      ) : null}

      <button className="button" onClick={handleAddClick} style={{ display: addTask ? "none" : "inline-block" }}>
        + Add Task
      </button>
    </>
  );
}
