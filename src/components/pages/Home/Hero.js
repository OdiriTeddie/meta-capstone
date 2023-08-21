import { Link } from "react-router-dom";
import HeroImg from "../../../assets/hero-img.jpg";
import "./Hero.css";
import pages from "../../../utils/pages";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>London, UK.</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={pages.get("bookings").path}>
            Reserve a Table
          </Link>
        </div>
        <img className="hero-image" src={HeroImg} alt="Restaurant food" />
      </div>
    </section>
  );
};

export default Hero;
