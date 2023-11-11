import Button from "./Button";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <section className="header-section">
      <div className="header-brand">
        <h1>SKMart</h1>
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
            <span className="greeting-user-name">Saikumarsss Murugesan</span>
            </p>
        </div>
        <div className="btn-links">
            <Button buttonName='Login' buttonType='login'/>
            <Button buttonName='Sign up' buttonType='signup'/>
            <div className="header-cart">
            <FaCartShopping className="cart-icon"/>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
