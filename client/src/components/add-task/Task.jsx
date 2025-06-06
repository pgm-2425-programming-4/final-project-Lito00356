import { useState } from "react";

export function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [hideAddToList, setHideAddToList] = useState(false);
  const [title, setTitle] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  function openForm() {
    setShowForm(true);
    setAddTask(true);
    setHideAddToList(false);
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
    setShowForm(false);
    setHideAddToList(true);
    setAddTask(false);
  }

  function openDialog() {
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }

  function editTask() {
    alert("You are trying to edit the task");
  }

  function deleteTask() {
    alert("You are trying to delete the task");
  }

  return (
    <>
      <ul className="task">
        {tasks.map((title, index) => (
          <li className="task__item" key={index} onClick={openDialog}>
            {title}
          </li>
        ))}
      </ul>

      {showForm ? (
        <article className="task__item task__item--creation">
          <form className="form">
            <label
              className={`form__label ${addTask ? "" : "form__label--none"}`}
            >
              <input
                className="form__input"
                type="text"
                placeholder="Title"
                vlaue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <div
              className="form__commit"
              style={{
                display: hideAddToList ? "none" : "flex",
              }}
            >
              <button type="submit" className="button" onClick={addTaskToList}>
                Add to list
              </button>
              <button className="button form__close" onClick={closeForm}>
                X
              </button>
            </div>
          </form>
        </article>
      ) : null}

      {showDialog ? (
        <dialog className="modal" open>
          <div className="modal__section-1">
            <h2>Task title</h2>
            <div className="modal__list-order">
              <ul className="modal__tags">
                <li className="modal__tags-item">front-end</li>
                <li className="modal__tags-item">backend</li>
                <li className="modal__tags-item">JS</li>
                <li className="modal__tags-item">HTML</li>
              </ul>
              <button className="button button--add-tag">+ Tag</button>
            </div>
            <strong>Description</strong>
            <p className="modal__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sunt optio hic earum praesentium eius consectetur molestias, et
              sapiente provident expedita reprehenderit asperiores deserunt,
              ipsum libero quos vitae beatae modi minima ut vero distinctio.
              Veniam nam ut hic veritatis harum mollitia totam ipsc veritatis
              harum mollitia totam ipsam eac veritatis harum mollitia totam
              ipsam eac veritatis harum mollitia totam ipsam eaam eaque
              incidunt, temporibus culpa eius corporis? Accusantium.
            </p>
          </div>
          <div className="modal__section-2">
            <button className="button modal__close" onClick={closeDialog}>
              X
            </button>
            <button className="button" onClick={editTask}>
              edit task
            </button>
            <button className="button" onClick={deleteTask}>
              delete task
            </button>
          </div>
        </dialog>
      ) : (
        ""
      )}

      <button
        className="button"
        onClick={openForm}
        style={{ display: addTask ? "none" : "inline-block" }}
      >
        + Add Task
      </button>
    </>
  );
}
