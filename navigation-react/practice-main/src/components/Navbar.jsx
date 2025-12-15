import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const handleToggleBtn = () => {
    inputRef.current?.classList.toggle("max-h-0");
    inputRef.current?.classList.toggle("opacity-0");

    // const toggleBtn = document.getElementById("menu-btn");
  };

  return (
    <div>
      <nav className="bg-[#ffffff] shadow-md md:flex items-center justify-between p-2 px-8 w-full">
        <div
          onClick={() => navigate("/")}
          className="text-3xl cursor-pointer w-[10%]"
        >
          App
        </div>

        <div
          className="md:hidden float-right relative -top-[30px]"
          onClick={handleToggleBtn}
        >
          <button id="menu-btn" className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="www.w3.org"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          id="menu"
          ref={inputRef}
          className="z-0 md:flex items-center md:justify-end md:space-x-15 md:w-[90%] max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden transition-all duration-600 ease-in-out"
        >
          <ul className="md:flex justify-center space-x-4 text-xl">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/About")}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/counter")}>
              CounterClean
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
