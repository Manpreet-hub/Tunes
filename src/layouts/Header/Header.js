import "./header.css";
import { Login, Signup } from "../../pages";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { playIcon } from "../../assets/";
import { useAuth } from "../../context/";

export const Header = () => {
  const { authState, authDispatch } = useAuth();
  const { isAuthenticated } = authState;
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    localStorage.removeItem("token");
    authDispatch({ type: "RESET_AUTH" });
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="hamburger-menu">
        <div className="hamburger-lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <input type="checkbox" />
        <ul className="menu-items">
          <li>
            <Link className="menu-link" to="/">
              <HomeOutlinedIcon className="menu-icon" /> Home
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/">
              <ExploreOutlinedIcon className="menu-icon" /> Explore
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/history">
              <RestoreOutlinedIcon className="menu-icon" /> History
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/watchLater">
              <WatchLaterOutlinedIcon className="menu-icon" /> Watch Later
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/likedVideos">
              <ThumbUpOutlinedIcon className="menu-icon" /> Liked Videos
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-title">
        <img className="brandIcon-img" src={playIcon} alt="brandIcon" />
        <Link to="/">Tunes</Link>
      </div>
      <div className="search-box">
        <i className="search-icon fas fa-search" aria-hidden="true"></i>
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
      <div className="navbar-section">
        <ul className="nav-icons">
          <li>
            {isAuthenticated ? (
              <p onClick={logoutHandler}>Logout</p>
            ) : (
              <Link to="/login" className="navbar-links">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
