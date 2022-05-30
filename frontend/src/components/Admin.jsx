import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAdmin, resetAdmin } from "../features/authAdmin/adminSlice";
import Spinner from "../components/Spinner";

export default function Admin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admin, isLoading, isError, isSucess, message } = useSelector(
    (state) => state.admin
  );


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSucess || admin) {
      navigate("/admin-page");
    }
    dispatch(resetAdmin());
  }, [admin, isError, isSucess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(loginAdmin(userData));
  };

  

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-5 mb-5">
      <h1 className="container mb-5">
        <FaSignInAlt/> Admin Login</h1>
      <form className="container login" onSubmit={onSubmit}>
        <div className="form-group mt-3">
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            autoComplete="off"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group mt-3">
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className=" my-btn mt-3">
          Login
        </button>
      </form>
    </div>
  );
}
