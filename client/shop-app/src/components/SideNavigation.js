import Button from "./Button";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideNavigation = ({ displayNav , closeNavHandler }) => {
  return (
    // <div className={displayNav ? "grey-out":''} onClick={closeNavHandler(!displayNav)}>
    <section
    onClick={()=> closeNavHandler(false)}
      className={displayNav ? "side-navigation active" : "side-navigation"}
    >
      <div className="nav-header">
        <h1>SKMart</h1>
        <span className="nav-close" onClick={()=> closeNavHandler(!displayNav)}>X</span>
      </div>
      <div className="user-section">
        
        <div className="user-greeting">
          Welcome, <br />
          <h2>Saikumar</h2>
        </div>
        <div className="login-signup-links">
          <Link to="/login">
            <Button buttonName="Login" buttonType="login btn-login-mobile" />
          </Link>
          
          <Link to="/signup">
          <Button buttonName="Signup" buttonType="signup btn-signup-mobile" />
          <br />
          
          </Link>
          
          <Link to="/logout">
          <Button buttonName="Logout" buttonType="logout btn-logout-mobile" />
          </Link>
        </div>
      </div>
      <div className="category-navigation-mobile">
        <h1 className="nav-category-heading">Explore Categories</h1>
        <ul className="nav-categories">
          <li className="nav-category-item">Men</li>
          <li className="nav-category-item">Women</li>
          <li className="nav-category-item">Beauty</li>
          <li className="nav-category-item">Electronics</li>
          <li className="nav-category-item">Kids & Baby</li>
          <li className="nav-category-item">Sale & Clearance</li>
        </ul>
      </div>

      <div className="social-media-links">
        <div className="social-facebook-link">
          <Link className="social-icon" to="https://www.facebook.com"><FaSquareFacebook /></Link>
          
        </div>
        <div className="social-twitter-link">
          <Link className="social-icon" to="https://www.twitter.com"><FaSquareTwitter /></Link>
          
        </div>
        <div className="social-instagram-link">
          <Link className="social-icon" to="https://www.instagram.com"><FaSquareInstagram /></Link>
          
        </div>
        <div className="social-linkedin-link">
          <Link  className="social-icon" to="https://www.linkedin.com"><FaLinkedin /></Link>
          
        </div>
      </div>
    </section>
    // </div>
  );
};

export default SideNavigation;
