import "./Css/Section2.css";
import n_492780366644 from "../images/n_492780366644.png";
import Aos from "aos";
import "aos/dist/aos.css";
import cars from '../../api/Cars.json'
function Section2() {
  Aos.init();
  return (
    <div className="mx-5 section2">
		<h6>Explore</h6>
    <div className="row ">
    {cars.map((car) => (
      <div className="col-12 col-md-5 mt-2">
         <div className="card" >
       <div className="mt-2">
         <div className="row container m-0 p-0">
           <div className="col-6">
             <span className="text-start" id="Economy">
               Economy
             </span>
             <p
               className="position-absolute "
               id="Mitsubishi_Mirage_or_similar"
             >
               {car.name}
             </p>
             <p className="mt-4" id="MANUAL">
               MANUAL
             </p>
           </div>
           <div className="col-6 text-end">
             <span className="text-end " id="More_details">
               more details
             </span>
           </div>
         </div>
       </div>
       <img
         src={n_492780366644}
         id="n_492780366644"
         className="card-img-top"
         alt="..."
       />
       <div className="card-body m-0 p-0 ">
         <div className="pay m-0 p-0">
           <h6 className="paylater container " id="PAY_LATER">
             paylater
           </h6>
           <div className="row m-0 p-0">
             <div className="col-4">
               <h6 className="card-title m-0 p-0 ">Card title</h6>
               <p className="card-text mb-0 " id="n_5999">
                 $ 32
               </p>
               <p id="Per_Day">Per Day</p>
             </div>
             <div className="col-4">
               <h6 className="card-title m-0 p-0">Card title</h6>
               <p className="card-text mb-0" id="n_5999">
                 $ 88
               </p>
               <p id="Per_Day">Total</p>
             </div>
             <div className="col-4 m-0 p-0">
               <p id="Price_details">Price details</p>
             </div>
           </div>
         </div>
         <div className="">
           <div className="row m-0 p-0 mb-3">
             <div className="col-6">
               <a href="#" className="btn " id="COMPARE_CAR">
                 SELECT CAR
               </a>
             </div>
             <div className="col-6 text-end">
               <a href="#" className="btn " id="SELECT_CAR">
                 COMPARE CAR
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
      </div>
    ))}
    </div>
     
    </div>
  );
}

export default Section2;
