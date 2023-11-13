import Button from "./Button";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const SideNavigation = ({ displayNav , closeNavHandler }) => {
  return (
    <section
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
          <Button buttonName="Login" buttonType="login btn-login-mobile" />
          <Button buttonName="Signup" buttonType="signup btn-signup-mobile" />
          <br />

          <Button buttonName="Logout" buttonType="logout btn-logout-mobile" />
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
          <FaSquareFacebook />
        </div>
        <div className="social-twitter-link">
          <FaSquareTwitter />
        </div>
        <div className="social-instagram-link">
          <FaSquareInstagram />
        </div>
        <div className="social-linkedin-link">
          <FaLinkedin />
        </div>
      </div>
    </section>
  );
};

export default SideNavigation;
