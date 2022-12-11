import React from 'react'

function Comp2() {
  return (
    <div className="col-md-9 my-4">

    <form action="" className='formAddAn'>
      <fieldset>
          <label
          >* Old password<input
            type="password"
            name="oldPassword"
            placeholder="Old password"
            pattern="[a-z0-5]{8,}"
            required
        /></label>
          <label
          >* Password<input
            type="password"
            name="password"
            placeholder="password"
            pattern="[a-z0-5]{8,}"
            required
        /></label>
        <div className="text-start">
        <small className='smallTxt '>Minimum 6 characters</small>
        </div>
      </fieldset>

      <div className="text-end ">
        <input type="submit"  value="Change" />
      </div>
    </form>
  </div>
  )
}

export default Comp2