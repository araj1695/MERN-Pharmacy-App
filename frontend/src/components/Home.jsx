import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MedicineNav from "./MedicineNav";
import "../styles/style.css";

export default function Home() {
  const navigate = useNavigate()
  const {admin} = useSelector((state) => state.admin)
  useEffect(() => {
    if(admin){
      navigate("/admin-page")
    }
  })

  return (
    <div className="container">
      <MedicineNav />
      <div className="home-cont">
        <h1 className="text-center pt-2 ">
          Welcome To India's Best Online Shop
        </h1>
        <div className="my-cc">
          <div className="items">
            <Link to="/cart">
              <img src="/images/1.jpg"></img>
            </Link>
          </div>
          <div className="items">
            <Link to="/cart">
              <img src="./images/2.jpg"></img>
            </Link>
          </div>
          <div className="items">
            <Link to="/cart">
              <img src="./images/3.jpg"></img>
            </Link>
          </div>
        </div>
        <div className="my-c">
          <h1>Shop By Category</h1>
          <div className="items">
            <Link to="/cart">
              <img src="/images/4.jpg"></img>
            </Link>
            <h2>Ayush</h2>
          </div>
          <div className="items">
            <Link to="/cart">
              <img src="./images/5.jpg"></img>
            </Link>
            <h2>Hare Care</h2>
          </div>
          <div className="items">
            <Link to="/cart">
              <img src="./images/6.jpg"></img>
            </Link>
            <h2>Body care</h2>
          </div>
        </div>
        <div className="my-c">
          <div className="items">
            <Link to="/cart">
              <img src="/images/7.jpg"></img>
            </Link>
            <h2>Treatments</h2>
          </div>
          <div className="items">
            <Link to="/cart">
              <img src="./images/8.jpg"></img>
            </Link>
            <h2>Cold and Fever</h2>
          </div>
          <div className="items">
            <Link to="/cart">
              <img src="./images/9.jpg"></img>
            </Link>
            <h2>Veet</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
