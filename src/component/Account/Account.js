import React from "react";
import "./Page1.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Page1 from "./Page1";
import Page from "./Page";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Nav from "./Nav";
import Home from "../HomePage/Home";
import Explore from "../HomePage/Explore";

function Account() {
  return (
    <>
      
      <div className="">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>

          <Route path="/account">
          <Route path="" element={<Page />} />
          <Route path="setting" element={<Page1 />}>
            <Route path="" element={<Comp1/>} />
            <Route path="Comp1" element={<Comp1/>} />
            <Route path="Comp2" element={<Comp2 />} />
            </Route>
          </Route>
          
        </Routes>
      </div>
      
    </>
  );
}

export default Account;
