import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page1 from "./component/HomePage/Page1";
import { useSelector } from "react-redux";
import SignIn from "./component/HomePage/SignIn";
import Home from './component/HomePage/Home';
import { Fragment } from "react";
import Navbar from "./component/Account/Navbar";
import Footer from "./component/HomePage/Footer";
import Nav from "./component/Account/Nav";
import Account from "./component/Account/Account.js";
import Page from "./component/Account/Page";


function App() {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);

  // const user = useSelector

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggIn && 
        <Fragment>
        <Nav/>
        <Account/>
        <Footer/>
        </Fragment>}

        {!isLoggIn && <Page1/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
