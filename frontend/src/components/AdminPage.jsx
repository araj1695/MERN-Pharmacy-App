import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminNav from "./AdminNav";

export default function AdminPage() {
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.admin);
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  });
  return (
    <div className="container">
      <AdminNav />

      <div className="img">
        <h1 className="text-center ">Welcome to Admin Page</h1>
        <img src="./images/admin.jpg" />
      </div>
    </div>
  );
}
