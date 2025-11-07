import React from 'react'
import InfoCard from './InfoCard'
import AboutUs from './AboutUs'

function Section4() {
  return (
    <div className='section4 flex'>
      <div className='aboutUs flex'>
  <AboutUs />
      </div>
      <div className='aboutImg'><img src="public/section4_img1.jpg" alt="" width={100} /></div>
    </div>
  )
}

export default Section4