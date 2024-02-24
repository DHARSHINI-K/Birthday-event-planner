import '../../assets/css/user/Footer.css';
import balloon from '../../assets/balloons.png';
import { Whatsapp, Instagram, Twitter, Pinterest, Facebook } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-main-div company-info">
          <img src={balloon} alt="Company Logo" width="50" />
          <p className="comp-para">
            BLOWOUT is a birthday event management providing services from crafting personalized invitations that set the celebratory tone to curating vibrant decor that sparkles with the birthday spirit, every detail is a brushstroke on the canvas of festivity.
          </p>
        </div>

        <div className="footer-main-div">
          <h2 className="Contact-info">Contact info</h2>
          <p>+91-9876543210</p>
          <p>support@blowout.in</p>
          <p>Gandhipuram, Coimbatore</p>
        </div>
        <div className="footer-main-div stay-connected">
          <h2 className="Stay-Connected">Stay Connected</h2>
          <div className="social-links">
            <a href="https://wa.me/">
              <Whatsapp />
            </a>

            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/">
              <Facebook />
            </a>
            <a href="https://twitter.com/">
              <Twitter />
            </a>
            <a href="https://www.pinterest.com/">
              <Pinterest />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <center><p>© BLOWOUT</p></center>
      </div>
    </footer>
  );
};
