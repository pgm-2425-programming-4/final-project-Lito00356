import { useState } from "react";

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
      {openMenu ? (
        <>
          <button
            className="button hamburger open"
            id="closed-menu"
            onClick={closeProjectMenu}
          >
            <svg
              className=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 18H10"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12L16 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </button>
          <div className="scroll-menu open" id="menu">
            <div className="menu__current-project">
              <strong>Project title</strong>
              <a href="#">Backlog</a>
            </div>
            <div className="menu__projects">
              <strong className="menu__projects-title">Other projects</strong>
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            className="button hamburger"
            id="opened-menu"
            onClick={openProjectMenu}
          >
            <svg
              className="hamburger__svg"
              viewBox="0 -1 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Icon-Set"
                    transform="translate(-210.000000, -887.000000)"
                    fill="#000000"
                  >
                    <path
                      d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z"
                      id="hamburger"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </>
      )}
    </>
  );
}
