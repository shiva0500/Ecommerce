import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../../App.css";
import "./About.css";
import c1 from "../../assets/bg-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.jpg";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";
import a5 from "../../assets/a5.jpg";
import a6 from "../../assets/a6.jpg";

function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about_header">
          <div className="a_head">
            <h1>About</h1>
          </div>
          <div className="head_content">
            <h4>We provide fresh and healthy plants for your space</h4>
            <p>
              Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit
              mauris semper platea urna, sapien fermentum venenatis etiam enim
              ullamcorper phasellus tortor justo sapien faucibus in adipiscing
              risus adipiscing bibendum nec eget tincidunt sed.
            </p>
          </div>
        </div>

        <div class="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/Qbh5nCS76dc?si=y2ronRxkQq_sizr0&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div className="about_story">
          <div className="story_head">
            <p>OUR STORY</p>
          </div>
          <div className="story_contents">
            <p className="ap">
              Tristique dapibus porta viverra sit accumsan integer semper dolor
              etiam id iaculis feugiat egestas urna est magna euismod donec
              facilisis sed integer orci ac.
            </p>
            <p className="ap">
              Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat
              sit mauris semper platea urna, sapien fermentum venenatis etiam
              enim ullamcorper phasellus tortor justo, et, pellentesque
              pellentesque sapien faucibus in adipiscing risus adipiscing
              bibendum in nec eget tincidunt in in sed magna arcu molestie nec
              mauris quisque.
            </p>
            <p className="ap">
              Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae
              in volutpat faucibus elementum, sodales orci mi fames molestie
              venenatis nunc hendrerit.
            </p>

            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            <p className="pp">
              Massa aliquam montes, odio porttitor sit ac maecenas interdum ut
              tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in
              nec ullamcorper vel.
            </p>
            <div className="r_profile">
              <img src={c1} alt="/" />
              <div className="r_p">
                <p>JENNIFER LEWIS</p>
                <span>Founder</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about_img">
          <img src={a1} alt="/" />
          <img src={a5} alt="/" />
          <img src={a2} alt="/" />
          <img src={a3} alt="/" />
          <img src={a4} alt="/" />
          <img src={a6} alt="/" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
