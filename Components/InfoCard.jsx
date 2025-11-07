import React from 'react'


function InfoCard() {

  return (
    <div className='infoCard flex'>
      <div className='info '>
        <p>WELCOME To</p>
        <h1>Dental Clinic</h1>
        <p> <i class="fa-solid fa-location-dot"></i>  254 W 27ST ST, NEW YORK, NY 10011</p>
        <p> <i class="fa-solid fa-phone"></i> (+1) 212 555 1234 </p>
        <p> <i class="fa-solid fa-location-dot"></i>  121 W 5ST, CALIFORNIA, CA 21011</p>
        <p> <i class="fa-solid fa-phone"></i> (+1) 310 555 6789</p>
        <button className='btnProp'>BOOK ONLINE</button>
      </div>
    </div>
  )
}

export default InfoCard