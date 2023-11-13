import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="footer-section">
        <div className="help-and-support">
            <p className="support-text">Any Help or Support Call us on Tollfree number <span className="support-contact-number">8000334633653</span></p>

        </div>
        <div className="web-links">
        <span className="follow-on-text">Follow is on</span>
        <div className="web-icon web-facebook-link">
          <FaSquareFacebook />
        </div>
        <div className="web-icon web-twitter-link">
          <FaSquareTwitter />
        </div>
        <div className="web-icon web-instagram-link">
          <FaSquareInstagram />
        </div>
        <div className="web-icon web-linkedin-link">
          <FaLinkedin />
        </div>
      </div>
      <div className="copyright-details">
        <p className="copyright-text"> All right Reserved &copy; 2023</p>
      </div>
     
    </section>
  );
};

export default Footer;
