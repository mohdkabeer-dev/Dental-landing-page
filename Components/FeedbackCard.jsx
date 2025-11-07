import React from 'react'

function FeedbackCard() {
  return (
    <>
      <div className="feedbackContainer flex">

        <div className='feedCard'>
          <div className='fHead'><i class="fa-solid fa-quote-right"></i></div>
          <div className='fPara'>
            <h2>Stella Larson</h2>
            <div>"Absolutely the best dental experience I’ve ever had! The staff is kind, professional, and truly cares about your comfort."</div>
          </div>
          <div className='fTime'>Monday, July 2025</div>
        </div>



        <div className='feedCard'>
          <div className='fHead'><i class="fa-solid fa-quote-right"></i></div>
          <div className='fPara'>
            <h2>Nick Jhonson</h2>
            <div>"Clean clinic, gentle care, and zero wait time! Seamless experience from start to finish—highly recommended!"</div>
          </div>
          <div className='fTime'>Wednesday, July 2025</div>
        </div>



        <div className='feedCard'>
          <div className='fHead'><i class="fa-solid fa-quote-right"></i></div>
          <div className='fPara'>
            <h2>Olga Ivanova</h2>
            <div>"I was nervous at first, but the doctor made me feel calm. The whole process was painless and quick."</div>
          </div>
          <div className='fTime'>Saturday, July 2025</div>
        </div>



      </div>
    </>
  )
}

export default FeedbackCard