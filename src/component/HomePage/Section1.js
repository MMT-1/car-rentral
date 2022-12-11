import { Component, useEffect } from "react";
import "./Css/Section1.css";
import range from "../images/range.png";
import bmw from "../images/bmw.png";
import jeep from "../images/jeep.png";
import mercedes from "../images/mercedes.png";
import mini_cooper from "../images/mini_cooper.png";
import seat from "../images/seat.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

function Section1 () {
    Aos.init();
    return (
      <div className="container Section1">
        <div className="row ">
          <div className="col-xl-6  m-0 p-0">
            <motion.p
              className="text"
              data-aos="fade-down-right"
              data-aos-duration="2000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay:1 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </motion.p>
            <p
              className="text_1"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="text-start homePageButton">
              <motion.button
                className="btn_1"
                
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get started
              </motion.button>
              <button
                className="btn_2"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                Get started
              </button>
            </div>
          </div>
          <div
            className="col-xl-6  m-0 p-0 text-center"
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <img className="rangeRover" src={range} />
            <div className="cars_logo text-center">
              <img
                src={bmw}
                alt=""
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <img
                src={seat}
                alt=""
                className="ms-5"
                data-aos="fade-up"
                data-aos-duration="2100"
              />
              <img
                src={mercedes}
                alt=""
                className="ms-5"
                data-aos="fade-up"
                data-aos-duration="2200"
              />
              <img
                src={jeep}
                alt=""
                className="ms-5"
                data-aos="fade-up"
                data-aos-duration="2300"
              />
              <img
                src={mini_cooper}
                alt=""
                className="ms-5"
                data-aos="fade-up"
                data-aos-duration="2400"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Section1;
