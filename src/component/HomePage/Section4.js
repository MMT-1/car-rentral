import { Component } from "react";
import "./Css/Section4.css";
import range from "../images/v1.jpg";
import Aos from "aos"
import "aos/dist/aos.css"
function Section4 () {
    Aos.init();
    return (
      <div className="container Section4 " data-aos="fade-up" data-aos-duration="1000">
        <div className="Section4_back text-center ">
          <h5 className="text-white " data-aos="fade-up" data-aos-duration="1100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h5>
          <p className="text-white sectio4_text2" data-aos="fade-up" data-aos-duration="1200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum <br />
            is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="pt-4" data-aos="fade-up" data-aos-duration="1300">
            <input type="text" className="inpSection4" placeholder="Enter your email" id="Enter_your_email"/>
            <a className="sectio4_btn">
              <i class="fa-solid fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Section4;
