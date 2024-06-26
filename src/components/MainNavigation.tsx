import { useState } from "react";
import NavList from "./NavList";
import MainTitle from "./MainTitle";
import { servieInfo } from "../utils/serviceInfo";

const navList = [
  { name: "Notes", path: "/notes" },
  { name: "Todos", path: "/todos" },
  { name: "Calender", path: "/calender" },
];

function MainNavigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header
      id="root-header"
      className="bg-signature h-24 max-h-24 l max-w-full min-w-full flex justify-around w-screen fixed"
    >
      <section
        id="root-title"
        className="text-center flex items-center justify-center h-full "
      >
        {/* <h1 className="text-4xl p-0 m-0">Efficieneer</h1> */}
        <MainTitle />
      </section>
      <section id="root-nav-menu" className="flex justify-center items-center">
        <nav className={`${isNavOpen ? "block" : "hidden"} md:block`}>
          <ul id="root-nav-list" className="flex justify-around items-center">
            {servieInfo.map((service) => (
              <NavList
                key={service.title + service.path}
                name={service.title}
                path={service.path}
              />
            ))}
          </ul>
        </nav>
        <button
          className={`md:hidden block  text-black group `}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            className="w-8 h-8 group-hover:text-primary transition-color duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </section>
    </header>
  );
}

export default MainNavigation;
