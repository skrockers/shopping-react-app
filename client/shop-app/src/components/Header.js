import Button from "./Button";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";

const Header = ({displayNavHandler ,displayNav}) => {

  return (
    <>
        <section className="header-section">
      <div className="header-brand">
        <div className="mobile-hamburger-icon">
            <FaBars onClick={()=> displayNavHandler(!displayNav) } />
        </div>
        <Link to="/">  <h1>SKMart</h1></Link>
      
        <div className="mobile-cart-icon">
        <Link  className="react-link" to="/cart"><FaCartShopping className="cart-icon"/></Link>
        </div>
      </div>


      <div className="header-search">
        <form className="search-box-form">
          <input className="search-box" name="search-box" type="text" />
          <Button buttonName='Search'   buttonType='search'/>
        </form>
      </div>



      <div className="header-user-links">
        <div className="header-user-greetings">
            <p className="welcome-greeting">Welcome,
            <span className="greeting-user-name">Saikumar Murugesan</span>
            </p>
        </div>
        <div className="btn-links">
            <Link to="/login"><Button buttonName='Login' buttonType='login'/></Link>
            <Link to="/signup"><Button buttonName='Sign up' buttonType='signup'/></Link>
            <div className="header-cart">
              <Link to="/cart"><FaCartShopping className="cart-icon"/></Link>
            
            </div>

        </div>
      </div>
    </section>
    <NavigationBar />
    </>

  );
};

export default Header;
