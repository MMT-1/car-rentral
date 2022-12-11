import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink, Outlet } from "react-router-dom";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Nav from "./Nav";
import Navbar from "./Navbar";
import "./Page1.css";
function Page1() {
  return (
      <div className="container text-center">
        <Navbar/>
        <div className="row mt-4">
        <div className="col-md-3 iall">
            <NavLink to="Comp1">
              <button className="py-2 ps-4 text-start btn_profile">
                Profile
                <i className="fa-solid pe-0 text-end fa-caret-right i1"></i>
              </button>
            </NavLink>
            <NavLink to="Comp2">
              <button className="py-2 ps-4 mt-3 text-start btn_profile">
                Password
                <i className="fa-solid i2 fa-caret-right text-end"></i>
              </button>
            </NavLink>
          </div>
          <Outlet/>
        </div>
      </div>
  );
}

export default Page1;
