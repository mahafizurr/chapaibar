import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <div>
        {/* <h1 className="text-center font-bold text-2xl">Hello world</h1> */}
        <img src="./caba.png" alt="caba" />
      </div>
      <div className="px-4 py-2 text-white flex  justify-center bg-blue-900">
        <div
          className={
            toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "flex"
          }
          id="menu"
        >
          <ul>
            <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              <Link to="/">Home</Link>
            </li>

            <li className="md:inline-block relative group">
              <div
                className="cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"
                onClick={toggleDropdown}
              >
                <button className="text-sm">Committee</button>
              </div>
              {isDropdownOpen && (
                <div className="hidden group-hover:block">
                  <ul className="mt-2 flex flex-col items-center">
                    <li>
                      <Link to="/committee">Present Committee 2023</Link>
                    </li>
                    <li>
                      <Link to="/committee/2022">Previous Committee 2022</Link>
                    </li>
                    <li>
                      <Link to="/committee/2021">Previous Committee 2021</Link>
                    </li>
                    <li>
                      <Link to="/committee/2020">Previous Committee 2020</Link>
                    </li>
                    <li>
                      <Link to="/committee/2019">Previous Committee 2019</Link>
                    </li>
                    <li>
                      <Link to="/committee/2018">Previous Committee 2018</Link>
                    </li>
                  </ul>
                </div>
              )}
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
