import React from 'react'
import "./Page1.css";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./Account";
import Page1 from "./Page1";

function Navbar() {
  return (
    <nav className="navbar navbar-expand mt-4">
    <div className="container-fluid">
      <div className="navbar" id="navbarNav">
        <ul className="navbar-nav px-3">
          <li className="nav-item itNav px-2 pb-1">
            <i className="fa-solid fa-sliders iNav"></i>
            <NavLink
              className="nav-link Home d-inline p-0"
              to={'/account'}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item itNav px-2 pb-1">
            <i className="fa-sharp fa-solid fa-cart-shopping iNav"></i>
            <a className="nav-link Home d-inline p-0" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item itNav px-2 pb-1">
            <i className="fa-solid fa-heart iNav"></i>
            <a className="nav-link Home d-inline p-0" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item itNav px-2 pb-1">
            <i className="fa-solid fa-gear iNav"></i>
            <a className="nav-link Home d-inline p-0" href="#">
              
              <Link className="nav-link Home d-inline p-0" to={'/account/setting'}>
              Setting
            </Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar