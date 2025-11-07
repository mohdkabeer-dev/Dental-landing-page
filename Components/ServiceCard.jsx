import React from 'react'

function ServiceCard() {
  return (
    <>
      <div className='serviceCard flex'>
        <div><img src="../chairs.png" alt="" width={70} /></div>
        <p>“Healthy smiles start with regular checkups.”</p>
      </div>

      <div className='serviceCard flex'>
        <div><img src="../tools.png" alt="" width={70} /></div>
        <p>“Expert surgical care for lasting dental health.”</p>
      </div>

      <div className='serviceCard flex'>
        <div><img src="../teethBridge.png" alt="" width={70} /></div>
        <p>“Bring your smile back, one tooth at a time.”</p>
      </div>

      <div className='serviceCard flex'>
        <div><img src="../clean.png" alt="" width={70} /></div>
        <p>“Shine bright with a professional clean.”</p>
      </div>
    </>
  )
}

export default ServiceCard