import React from "react";
import banner from "../../assets/bg-1.jpg";
import "../../App.css";
import c1 from "../../assets/bg-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Testimonial.css";

import {
  faQuoteLeft,
  faLock,
  faBox,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <>
      <div className="Testimonial">
        <img src={banner} alt="" />
        <div className="story_content">
          <p className="head">OUR STORY</p>
          <h2>For People Who Love Plants</h2>
          <p className="body">
            Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc
            at velit lacinia porttitor a nulla tellus ultrices varius aliquet
            sed in placerat.
          </p>
          <p className="body">
            Facilisis eu faucibus diam cursus pulvinar consectetur purus sem
            felis, mauris consectetur nisl vitae gravida ultricies sem
            condimentum aliquet ut sed gravida amet vitae euismod pulvinar
            volutpat laoreet pharetra.
          </p>
          <button>Readmore</button>
        </div>
      </div>
      <div className="reviews">
        <h2>What Our Customers Say</h2>
        <div className="wrapper">
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
            <p>
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <img src={c1} alt="/" />
            <p>JENNIFER LEWIS</p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />{" "}
            <p>
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <img src={c1} alt="/" />
            <p>JENNIFER LEWIS</p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faQuoteLeft} />{" "}
            <p>
              Sed odio donec curabitur auctor amet tincidunt non odio enim felis
              tincidunt amet morbi egestas hendrerit.
            </p>
            <img src={c1} alt="/" />
            <p>JENNIFER LEWIS</p>
          </div>
        </div>
      </div>

      <div className="giftcard">
        <p className="ghead">GIFT CARD</p>
        <h2>Give the Gift of Greenery</h2>
        <p className="gbody">
          Pretium tortor risus enim neque quis pellentesque maecenas proin odio
          eget arc
        </p>
        <button className="gbtn">Purchase a Gift Card</button>
      </div>

      <div className="services">
        <div className="service_card">
          <FontAwesomeIcon
            className="sicon"
            icon={faLock}
            style={{
              color: "#fafafa",
              fontSize: "1.35rem",
              padding: "1.35rem",
            }}
          />
          <div className="s-content">
            <h4>SECURE PAYMENT</h4>
            <p>Curabitur interdum, nisl at tincidunt.</p>
          </div>
        </div>
        <div className="service_card">
          <FontAwesomeIcon
            className="sicon"
            icon={faBox}
            style={{
              color: "#fafafa",
              fontSize: "1.35rem",
              padding: "1.35rem",
            }}
          />
          <div className="s-content">
            <h4>DELIVERED WITH CARE</h4>
            <p>Curabitur interdum, nisl at tincidunt.</p>
          </div>
        </div>
        <div className="service_card">
          <FontAwesomeIcon
            className="sicon"
            icon={faHandHoldingHeart}
            style={{
              color: "#fafafa",
              fontSize: "1.35rem",
              padding: "1.35rem",
            }}
          />
          <div className="s-content">
            <h4>EXCELLENT SERVICE</h4>
            <p>Curabitur interdum, nisl at tincidunt.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
