import { Component } from "react";
import "./Css/Section3.css";
import safe from'../images/safe.png';
import cars from'../images/cars.jpg';
import Aos from "aos"
import "aos/dist/aos.css"

function Section3() {
      Aos.init();
      return(
        <div className="container Section3">
          <div className="row">
            <div className="col-md-6 text-end">
              <img src={cars} alt="" />
            </div>
            <div className="col-md-6">
                <p id="lorem">lorem</p>
                <p id="lorem1">Lorem Ipsum is simply dummy text of the printing</p>
                <p id="lorem2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button id="btnSextion3" className="px-4">Get started</button>
            </div>
          </div>


      </div>
      );
    }
  


  export default Section3;