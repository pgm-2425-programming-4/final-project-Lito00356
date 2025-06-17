import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function ProjectMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  function openProjectMenu() {
    setOpenMenu(true);
  }

  function closeProjectMenu() {
    setOpenMenu(false);
  }

  return (
    <>
      <button className={`button hamburger ${openMenu ? "open" : ""}`} id="closed-menu" onClick={openMenu ? closeProjectMenu : openProjectMenu}>
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
      <div className={`scroll-menu ${openMenu ? "open" : ""}`} id="menu">
        <div className="menu__projects">
          <Link to="about" className={`menu__projects-item ${openMenu ? "open" : ""}`}>
            About
          </Link>

          <span href="#" className={`menu__projects-item item-extra ${openMenu ? "open" : ""}`}>
            Other projects <span>&#9654;</span>
          </span>
          <Link to="backlog" className={`menu__projects-item ${openMenu ? "open" : ""}`}>
            Backlog
          </Link>
        </div>
      </div>
    </>
  );
}
