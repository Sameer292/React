import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* //create a nav bar */}
      <nav>
        <ul className="flex flex-row px-2  justify-between py-3 rounded-lg w-1/6 min-w-max bg-orange-200">
          <li>
            <NavLink className={({isActive})=>` ${isActive? 'text-orange-700 ' : ' text-black'} hover:text-orange-700  ` } to="/Home"> Home </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>` ${isActive? 'text-orange-700 ' : ' text-black'} hover:text-orange-700 ` } to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>` ${isActive? 'text-orange-700 ' : ' text-black'} hover:text-orange-700 ` } to="/Githubinfo">Github</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
