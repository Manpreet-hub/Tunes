import "./auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/";
import axios from "axios";
import { loginService } from "../../services/";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { authState, authDispatch } = useAuth();
  const [user, setUser] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      try {
        const { data } = await loginService(user);
        const { encodedToken, foundUser } = data;
        localStorage.setItem("token", encodedToken);
        authDispatch({
          type: "INIT_AUTH",
          payload: data.foundUser,
          authToken: true,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const loginAsGuest = (e) => {
    e.preventDefault();
    setUser({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="txt-header-color txt-center">LOGIN</h2>
        <form onSubmit={submitFormHandler}>
          <label className="label">Email address</label>
          <input
            required
            className="user-input"
            type="email"
            name="email"
            value={user.email}
            placeholder="test@gmail.com"
            onChange={changeHandler}
          />

          <label className="label">Password</label>
          <input
            required
            className="user-input"
            type="password"
            name="password"
            value={user.password}
            placeholder="test123"
            onChange={changeHandler}
          />

          <div className="user-info flex-row space-between">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <Link to="/">Forgot password?</Link>
          </div>

          <button
            className="btn-default  btn-primary login-signup-btn"
            type="submit"
          >
            Login
          </button>
          <button
            className="btn-default  login-signup-btn"
            type="submit"
            onClick={loginAsGuest}
          >
            Login As Guest
          </button>

          <div className="create">
            <Link to="/signup"> Create new account 👉</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
