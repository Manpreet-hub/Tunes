import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-title">
          Made with <i className="fas fa-heart"></i> by Manpreet
        </div>
        <ul className="footer-social-icons text-center">
          <li className="footer-links">
            <a href="https://www.linkedin.com/in/manpreet-singh-912ba3171/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="footer-links">
            {" "}
            <a href="https://github.com/Manpreet-hub">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="footer-links">
            <a href="https://twitter.com/Manpree99208412">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
