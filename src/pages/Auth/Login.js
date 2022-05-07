import "./auth.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="txt-header-color txt-center">LOGIN</h2>
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

          <div className="user-info flex-row space-between">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <Link to="/">Forgot password?</Link>
          </div>

          <button className="btn-default  btn-primary login-signup-btn">
            Login
          </button>

          <div className="create">
            <Link to="/signup">Create new account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
