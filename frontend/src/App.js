import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Admin from "./components/Admin";
import AdminPage from "./components/AdminPage";
import AdminItems from "./components/AdminItems";
import Users from "./components/Users";
import Order from "./components/Order";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-items" element={<AddItem />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/admin-items" element={<AdminItems />} />
          <Route exact path="/admin-page" element={<AdminPage />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
