import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import AuthLayout from "./Auth/Layout";
import Login from "./Pages/Auth/login";
import Register from "./Pages/Auth/Register";
import React from "react";
import AdminLayout from "./Pages/Admin_view/Layout";
import AdminDashboard from "./components/Admin_view/Dashboard";
import AdminFeatures from "./components/Admin_view/Features";
import AdminOrders from "./components/Admin_view/Orders";
import ShoppingLayout from "./components/Shopping_view/Layout";
import ShoppingHeader from "./components/Shopping_view/Header";
import Not_found from "./Pages/Not_found/Not_found";
import ShoppingHome from "./Pages/Shopping_view/Home";
import ShoppingCheckout from "./Pages/Shopping_view/Checkout";
import ShoppingListing from "./Pages/Shopping_view/Listing";
import ShoppingAccount from "./Pages/Shopping_view/Account";
import CheckAuth from "./components/Common/Check-Auth";
import UnAuthPage from "./Pages/Unauth_page";

function App() {
  const isAuthenicated = false;
  const user = {
    name: "Bimal",
    role: "user",
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>
      <Routes>
        {/* Define the Layout as a parent route for Auth */}
        <Route path="/auth" element={<AuthLayout />}>
          {/* Nested routes for Login and Register */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenicated={isAuthenicated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenicated={isAuthenicated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="header" element={<ShoppingHeader />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="lisiting" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="home" element={<ShoppingHome />} />
        </Route>
        <Route path="*" element={<Not_found />} />
        <Route path="/unauth" element={<UnAuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
