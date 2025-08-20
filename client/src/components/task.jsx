import { useEffect, useRef, useState } from "react";
import { getAllTags } from "../queries/get-all-tags";

export function DisplayTask({ task = [], tags = [], handleDelete, handleEdit, handleTag }) {
  const dialogTask = useRef(null);
  const dialogConfirm = useRef(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [styleDialog, setStyleDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  function openDialog() {
    setStyleDialog(true);
    if (dialogTask.current) {
      dialogTask.current.showModal();
    }
  }

  function closeDialog() {
    setStyleDialog(false);
    setIsEditing(false);
    if (dialogTask.current) {
      dialogTask.current.close();
    }
  }

  function closeEdit() {
    setIsEditing(false);
  }

  function openConfirm() {
    setShowConfirm(true);
    dialogConfirm.current?.showModal();
  }

  function closeConfirm() {
    setShowConfirm(false);
    dialogConfirm.current?.close();
  }

  function editTask() {
    setIsEditing(true);
  }

  async function getTags() {
    const allTags = await getAllTags();
    console.log(allTags);
  }

  return (
    <>
      <li className="task__item" key={task.id} onClick={openDialog}>
        <span>{task.title}</span>
        <ul className="modal__tags">
          {tags.map((tag) => {
            return (
              <li className="modal__tags-item" key={tag.id}>
                {tag.tagName}
              </li>
            );
          })}
        </ul>
      </li>

      <dialog className={`modal ${styleDialog ? "open" : ""}`} ref={dialogTask}>
        <div className="modal__section-1">
          {isEditing ? <input value={title} onChange={(e) => setTitle(e.target.value)} /> : <h2>{task.title}</h2>}
          <div className="modal__list-order">
            <ul className="modal__tags">
              {tags.map((tag) => {
                return (
                  <li className="modal__tags-item" key={tag.id}>
                    {tag.tagName}
                  </li>
                );
              })}
            </ul>
            <button className="button button--add-tag" onClick={getTags}>
              + Tag
            </button>
          </div>
          <strong>Description</strong>
          {isEditing ? <textarea className="" value={description ?? ""} onChange={(e) => setDescription(e.target.value)} /> : <p className="modal__description">{task.description}</p>}
          {isEditing ? (
            <div className="flex">
              <button type="button" onClick={() => handleEdit(task, title, description)}>
                Save
              </button>
              <button onClick={closeEdit}>Cancel</button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="modal__section-2">
          <button className="button modal__close" onClick={closeDialog}>
            X
          </button>
          <button className="button" onClick={editTask}>
            edit task
          </button>
          <button className="button" onClick={openConfirm}>
            delete task
          </button>
        </div>
      </dialog>

      <dialog className={`confirm-modal ${showConfirm ? "open" : ""}`} ref={dialogConfirm}>
        <p>Are you sure you want to delete this task?</p>
        <div className="button-container">
          <button className="button button__confrim" onClick={closeConfirm}>
            No
          </button>
          <button
            className="button button__confrim"
            onClick={() => {
              handleDelete(task);
              closeConfirm();
              closeDialog();
            }}
          >
            Yes
          </button>
        </div>
      </dialog>
    </>
  );
}
