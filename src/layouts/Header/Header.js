import "./header.css";
import { Login, Signup } from "../../pages";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { playIcon } from "../../assets/";

export const Header = () => {
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
            <Link className="menu-link" to="/">
              <RestoreOutlinedIcon className="menu-icon" /> History
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/">
              <WatchLaterOutlinedIcon className="menu-icon" /> Watch Later
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/">
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
            <Link to="/login" className="navbar-links">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
