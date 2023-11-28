import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Testimonial from "../testimonial/Testimonial";
import Store from "../product/Store";
import image1 from "../../assets/hero-2.jpg"; // Import your images
import image2 from "../../assets/hero-3.jpg";
import image3 from "../../assets/hero.jpg";

const backgroundImages = [image1, image2, image3]; // Use the imported images

function Home() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setBackgroundImageIndex(randomIndex);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const homeStyle = {
    backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
  };

  return (
    <div>
      <Navbar />
      <div className="home" style={homeStyle}  ></div>
      <div className="hero">
        <h3>WELCOME TO THE GREENSTORE</h3>
        <h1>Let's Bring the Spring to Your Home</h1>
        <button className="homebtn">Shop Now</button>
      </div>
      <Store limit= {6}  />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;

