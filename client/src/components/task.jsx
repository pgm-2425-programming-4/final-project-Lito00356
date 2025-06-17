import { useState } from "react";

export function DisplayTask({ tasks = [] }) {
  const [showDialog, setShowDialog] = useState(false);

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
        {tasks.map((task) => (
          <li className="task__item" key={task.id} onClick={openDialog}>
            {task.title}
          </li>
        ))}
      </ul>

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
            <p className="modal__description"></p>
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
    </>
  );
}
