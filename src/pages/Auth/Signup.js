import "./auth.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="txt-header-color txt-center">SIGN UP</h2>
        <form>
          <label className="label">Email address</label>
          <input
            className="user-input"
            type="email"
            placeholder="Enter your Email"
          />

          <label className="label">Password</label>
          <input
            className="user-input"
            type="password"
            placeholder="Enter Password"
          />

          <label className="label">Confrim Password</label>
          <input
            className="user-input"
            type="password"
            placeholder="Enter Password"
          />
          <div>
            <input type="checkbox" /> I accept all terms and conditions
          </div>
          <button className="btn-default  btn-primary login-signup-btn">
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
