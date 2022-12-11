import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Account from "../Account/Account";
import Page from "../Account/Page";
import Explore from "./Explore";
import { User } from "../Account/User";

function Page1() {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="signin" element={<SignIn />} >
          <Route path="" element={<Account/>}/>      
        </Route>
        <Route path="/signup" element={<SignUp />} />

       
      </Routes>
      <Footer />
    </div>
  );
}

export default Page1;
