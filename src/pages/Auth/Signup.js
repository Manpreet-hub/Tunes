import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/";
import { signUpService } from "../../services/";

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
      console.log(data);
      authDispatch({
        type: "INIT_AUTH",
        payload: data.foundUser,
        authToken: true,
      });
      navigate("/");
      localStorage.setItem("token", encodedToken);
    } catch (error) {
      authDispatch({ type: "AUTH_FAILURE", payload: "Something went wrong!!" });
      console.log("error" + error);
    }
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
            placeholder="Enter your first name"
            onChange={handleFormDataChange}
          />
          <label className="label">Last Name</label>
          <input
            required
            className="user-input"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleFormDataChange}
          />
          <label className="label">Email address</label>
          <input
            required
            className="user-input"
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={handleFormDataChange}
          />
          <label className="label">Password</label>
          <input
            required
            className="user-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleFormDataChange}
          />

          <div>
            <input type="checkbox" /> I accept all terms and conditions
          </div>
          <button
            className="btn-default  btn-primary login-signup-btn"
            type="submit"
          >
            Create new account
          </button>
          <div className="create">
            <Link to="/login">Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
