import React from 'react'
import images_cl from './images_cl.png'


function Comp1() {
  return (
    <div className="col-md-9">
    <div className="text-start">
      <img className="imgProfile" src={images_cl} alt="" />
    </div>
    <form action="" className='formAddAn'>
      <fieldset>
        <label
          >* Name
          <input
            type="text"
            placeholder="Mourad"
            name="name"
            required
        /></label>
        <label
          >* Phone Number 
          <input
          
            type="number"
            name="phone"
            placeholder="+212 688 67 11 14"
            pattern="[a-z0-5]{8,}"
            required
        /></label>
        <label
          >* Email<input
            type="email"
            name="email"
            placeholder="addressmail@*****.**"
            pattern="[a-z0-5]{8,}"
            required
            class="inputBack"
        /></label>
      </fieldset>

      <div className="text-end ">
        <input type="submit"  value="Save" />
      </div>
    </form>
  </div>
  )
}

export default Comp1