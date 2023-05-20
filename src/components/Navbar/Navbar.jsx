import React from "react";
import {  NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar bg-primary text-base-100 sticky top-0 lg:px-10 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/offer">Nos offres</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">A propos de Kibyon</NavLink>
            </li>
          </ul>
        </div>
        <img src={logo} alt="" className="w-28" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/offer">Nos offres</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos de Kibyon</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
