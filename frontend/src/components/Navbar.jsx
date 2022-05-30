import React, { useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt,FaShoppingCart, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logout, reset} from "../features/auth/authSlice";
import axios from "axios";
import {logoutAdmin, resetAdmin} from "../features/authAdmin/adminSlice"

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const {admin} = useSelector((state) => state.admin)

  const [carts, setCarts] = useState([{
    name: "",
    brand: "",
    description: "",
    price: 0,
    quantity: 0
  }]);

  const onLogout = () => {
    if(user){
      dispatch(logout());
      dispatch(reset());
      navigate("/");
      axios.post("http://localhost:3001/api/cart",carts);
    }
    if(admin){
      dispatch(logoutAdmin());
      dispatch(resetAdmin());
      navigate("/");
    }
  };

  if(user || admin){
    if(user){
      let t = user.name.split(" ")[0].toUpperCase()
      var title= t[0].toUpperCase() + t.slice(1,t.length).toLowerCase()
    }
    if(admin){
      let t = admin.name.split(" ")[0].toUpperCase()
      var title= t[0].toUpperCase() + t.slice(1,t.length).toLowerCase()
    }
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">
            Medico
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <FaHome/> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                  <FaShoppingCart/> Cart
                </Link>
              </li>
                {user || admin ? (
                  <div className="d-flex">
                  <li className="nav-item mt-1">
                  <Link to="#" className="nav-link active "><h4>Welcome {(user && (title)) || (admin && (title))}</h4></Link>
                </li>
                  <li className="nav-item center">
                    <button className="btn btn-dark" onClick={onLogout}>
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </li>
                </div>
                ) : (
                  <li className="nav-item d-flex ">
                    <Link to="/login" className="nav-link center">
                      <FaSignInAlt />
                      Login
                    </Link>
                  </li>
                )}
                
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
