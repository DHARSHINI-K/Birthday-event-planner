import React, { useEffect } from 'react';
import { Navbar } from "../../components/user/Navbar";
import { Footer } from "../../components/user/Footer";
import { Bcard } from "../../components/user/Bcard";
import '../../assets/css/user/Landing.css';
import landingImage from '../../assets/pexels-photo-1190298.jpeg';
import bimage from '../../assets/pexels-photo-3172566.jpeg';
import trimage from '../../assets/pexels-photo-3172566.jpeg';
import timage from '../../assets/pexels-photo-3172566.jpeg';

export const Landing = () => {

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const target = document.querySelector(".landing-desc");

    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="landing" className="landing-container">
      <Navbar />
      <div className="landing-image-container">
        <img src={landingImage} alt="Landing Image" className="landing-image" />
        <div className="landing-text">
          <h1 className="landing-heading">We create !</h1>
          <h1 className="landing-heading">You celebrate...</h1>
          <p className="landing-subtext" style={{ fontSize: '1.2rem',display: 'flex', flexDirection: 'column', gap: '10px'  }}>We organize all types of birthday parties</p>
        </div>
      </div>
      <div className="services-packages">
        <center>
          <h4 style={{ color: 'purple' }}>Services and packages</h4>
          <p style={{ color: 'purple' }}>Experience the joy of our outstanding services and unbeatable packages!</p>
        </center>
        <div className="packages">
          <Bcard image={timage} package="Silver" desc="Intimate gathering for 5 to 10 guests. Meticulously curated details. Refined events, delectable delights." />
          <Bcard image={trimage} package="Gold" desc="Luxury package for 20 to 50 guests. Opulent extravagance, unparalleled sophistication." />
          <Bcard image={bimage} package="Diamond" desc="Grandeur package for 60 to 100 guests. Luxury beyond compare, every moment radiates prestige." />
        </div>
      </div>
      <Footer />
    </div>
  );
}
