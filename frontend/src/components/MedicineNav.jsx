import React from 'react';
import {Link} from "react-router-dom";
import "../styles/style.css";

export default function MedicineNav() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-6 fw-light my-link" to="/cart">
          Health, Household & Personal Care
          </Link>
          <Link className="navbar-brand fs-6 fw-light my-link" to="/cart">
            Beverages 
          </Link>
          <Link className="navbar-brand fs-6 fw-light my-link" to="/cart">
            Dry fruits & snacks 
          </Link>
          <Link className="navbar-brand fs-6 fw-light my-link" to="/cart">
            Chocolates & sweets 
          </Link>
          <Link className="navbar-brand fs-6 fw-light my-link" to="/cart">
            Breakfast essentials 
          </Link>
          <Link className="navbar-brand fs-6 fw-light my-link" to="/cart">
            Cooking & ready to eat 
          </Link>
          <Link className="navbar-brand fs-6 fw-light my-link" to="/cart">
            Spices & seasonings 
          </Link>
        </div>
      </nav>
    </div>
  )
}
