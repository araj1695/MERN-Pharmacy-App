import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaUserAlt } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
// import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState([
    {
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
      password: "",
      password2: "",
    },
  ]);

  const {
    first_name,
    last_name,
    mobile,
    email,
    password,
    password2,
  } = formData;
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

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        first_name,
        last_name,
        mobile,
        email,
        password,
      };
      // console.log(userData);
      dispatch(register(userData));
    }

    if (isLoading) {
      return <Spinner />;
    }
  };

  return (
    <div>
      <h1 className="container">
        <h1>
          <FaUserAlt />
          Register
        </h1>
      </h1>
      <form className="container login" onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="first_name"
            id="first_name"
            value={first_name}
            autoComplete="off"
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="last_name"
            id="last_name"
            value={last_name}
            autoComplete="off"
            placeholder="Last name"
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="mobile"
            id="mobile"
            value={mobile}
            autoComplete="off"
            placeholder="Mobile"
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            autoComplete="off"
            aria-describedby="emailHelp"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            name="password2"
            id="password2"
            value={password2}
            autoComplete="off"
            placeholder="Confirm password"
            required
          />
        </div>
        <button type="submit" className=" my-btn mt-2">
          Registered
        </button>
      </form>
    </div>
  );
}
