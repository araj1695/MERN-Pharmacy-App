import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import "../styles/style.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSucess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSucess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSucess, message, navigate, dispatch]);

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
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="container center p-5">
        <FaSignInAlt />
        Login
      </h1>
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
        <button className=" my-btn mt-3">
          <Link to="/register">Register</Link>
        </button>
        <button className="admin-btn">
          <Link to="/admin">Admin Login</Link>
        </button>
      </form>
    </div>
  );
}
