import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/";
import { signUpService } from "../../services/";
import { toast } from "react-toastify";

export const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const singUpFormHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signUpService(userData);
      const { encodedToken, foundUser } = data;
      authDispatch({
        type: "INIT_AUTH",
        payload: data.foundUser,
        authToken: true,
      });
      navigate("/");
      localStorage.setItem("token", encodedToken);
      toast.success("Signup Successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      authDispatch({ type: "AUTH_FAILURE", payload: "Something went wrong!!" });
      toast.error("Username already exists", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const dummyData = (e) => {
    e.preventDefault();
    setUserData({
      firstName: "Manpreet",
      lastName: "Singh",
      email: "manpreet@gmail.com",
      password: "manpreet@123456",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="txt-header-color txt-center">SIGN UP</h2>
        <form onSubmit={singUpFormHandler}>
          <label className="label">First Name</label>
          <input
            required
            className="user-input"
            type="text"
            name="firstName"
            value={userData.firstName}
            placeholder="Manpreet"
            onChange={handleFormDataChange}
          />
          <label className="label">Last Name</label>
          <input
            required
            className="user-input"
            type="text"
            name="lastName"
            value={userData.lastName}
            placeholder="Singh"
            onChange={handleFormDataChange}
          />
          <label className="label">Email address</label>
          <input
            required
            className="user-input"
            type="email"
            name="email"
            value={userData.email}
            placeholder="manpreet@gmail.com"
            onChange={handleFormDataChange}
          />
          <label className="label">Password</label>
          <input
            required
            className="user-input"
            type="password"
            name="password"
            value={userData.password}
            placeholder="manpreet@123456"
            onChange={handleFormDataChange}
          />

          <div>
            <input type="checkbox" required /> I accept all terms and conditions
          </div>
          <button className="btn-default login-signup-btn" type="submit">
            Create new account
          </button>
          <button
            className="btn-default btn-primary login-signup-btn"
            type="submit"
            onClick={dummyData}
          >
            Fill dummy data
          </button>
          <div className="create">
            <Link to="/login">Already have an account 👉</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
