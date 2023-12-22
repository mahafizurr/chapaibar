import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <div>
        <img src="./caba.png" alt="caba" />
      </div>
      <div className="px-4 py-2 text-white flex  justify-center bg-blue-900">
        <div
          className={
            toggleMenu
              ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
              : "hidden md:flex"
          }
          id="menu"
        >
          <ul>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              <Link to="/">Home</Link>
            </li>

            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              <Link to="/committee">Present Committee</Link>
            </li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              <Link to="/membersdirectory">Members Directory</Link>
            </li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              <Link to="/notice">Notice</Link>
            </li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              <Link to="/employee">Employee</Link>
            </li>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              <Link to="/contact">Cantact</Link>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span
              onClick={handleToggle}
              class="navicon bg-white-darkest flex items-center relative"
            ></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Nav;
