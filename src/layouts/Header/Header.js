import "./header.css";
import { Login, Signup } from "../../pages";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { playIcon } from "../../assets/";
import { useAuth, useData } from "../../context/";
import { toast } from "react-toastify";

export const Header = () => {
  const { authState, authDispatch } = useAuth();
  const {
    dataState: { search },
    dataDispatch,
  } = useData();
  const { isAuthenticated } = authState;
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    localStorage.removeItem("token");
    authDispatch({ type: "RESET_AUTH" });
    navigate("/login");
    toast.success("Logged Out Successfully", {
      position: "top-right",
      autoClose: 2000,
    });
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
          <li>
            <Link className="menu-link" to="/playlist">
              <PlaylistAddIcon className="menu-icon" /> Playlist
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-title">
        <img className="brandIcon-img" src={playIcon} alt="brandIcon" />
        <Link to="/">Tunes</Link>
      </div>
      <div className="search-box">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) =>
            dataDispatch({ type: "SEARCH_QUERY", payload: e.target.value })
          }
        />
        <div className="search-icon">
          <i className=" fas fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div className="navbar-section">
        <ul className="nav-icons">
          <li>
            {isAuthenticated ? (
              <h4 className="navbar-links" onClick={logoutHandler}>
                Logout
              </h4>
            ) : (
              <Link to="/login">
                <h4 className="navbar-links"> Login</h4>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
