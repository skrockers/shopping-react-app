import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import UserOrders from "../pages/dashboard/menu/UserOrders";
import UserAddress from "../pages/dashboard/menu/UserAddress";
import UserProfile from "../pages/dashboard/menu/UserProfile";

const MainContent = () => {
  return (
   <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account/login" element={<Login />} />
        <Route path="account/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route  path="account/dashboard" element={<Dashboard/>}>
          <Route path="profile" element={<UserProfile />}/>
          <Route path="orders" element={<UserOrders />}/>
          <Route path="address" element={<UserAddress />}/>
        </Route>
        {/* <Route path="/orders" element={<UserOrders />}/> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default MainContent;
