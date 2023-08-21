import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhiteImage from "./assets/logo-white.png";
import pages from "../../utils/pages";

const socials = [
  { icon: faTwitter, name: "twitter" },
  { icon: faFacebook, name: "facebook" },
  { icon: faYoutube, name: "youtube" },
  { icon: faInstagram, name: "instagram" },
];

const contacts = [
  { icon: faLocationDot, info: " 8, Herbert Road" },
  { icon: faPhone, info: "(01) 632 960276" },
  { icon: faEnvelope, info: "info@littlelemon.com" },
];

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
