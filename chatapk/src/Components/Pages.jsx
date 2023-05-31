import React from "react";
import PageNotFound from "../ErrorPage/PageNotFound";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./Sections/About";
import Contact from "./Contact";
import Blogs from "./Blogs";


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Pages;
