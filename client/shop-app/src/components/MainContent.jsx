import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const MainContent = () => {
  return (
   <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default MainContent;
