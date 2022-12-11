import React from 'react'
import Navbar from './Navbar'
import noResultActivate from "./noResultActivate.png"



function Page() {
  return (
    <div className="container text-center my-4">
      <Navbar/>
    <img src={noResultActivate} className="imgannonce" alt=""/>
    <p className="m-0 mt-2">You have something to sell?</p>
    <p>Place your ad for free on CarRentral today</p>
      <button className="py-2 px-3 btnAddAn"><i className="fa-solid fa-camera "></i> <span class="ps-2">PLACE AN AD</span> </button>
</div>
  )
}

export default Page