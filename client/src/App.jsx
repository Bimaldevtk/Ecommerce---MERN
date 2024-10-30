import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./Auth/Layout";
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

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>
      <Routes>
        {/* Define the Layout as a parent route for Auth */}
        <Route path="/auth" element={<Layout />}>
          {/* Nested routes for Login and Register */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="header" element={<ShoppingHeader />} />
        </Route>
        <Route path="*" element ={<Not_found/>}/> 
      </Routes>
    </div>
  );
}

export default App;
