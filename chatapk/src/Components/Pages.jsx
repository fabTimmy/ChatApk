import React from "react";
import PageNotFound from "../ErrorPage/PageNotFound";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Pages;
