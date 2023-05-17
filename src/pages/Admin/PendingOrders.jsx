import React from 'react'

function PendingOrders() {
  return (
    <div className='Recentfeedbackmain'>
        <p style={{color:"white",marginLeft:"30%"}}>Pendingorders</p>

        <div className='pendingcard' style={{margin:"none"}}>

        <div className='recentfeedback' style={{margin:"none",lineHeight:"10px"}}>
        <h6>mary ndibo-274-566-678-90</h6>
        <p>Mary ndibo</p>
        <p>234 olkalou</p>
        <p>234-567-908-189</p>
       </div>

       <div className='money' style={{margin:"none"}}>

        <div className='driverscut' style={{display:"flex",flexDirection:"row",margin:"none"}}>
          <p style={{fontSize:"13px",marginRight:"3px",marginTop:"5px",color:"#6a063d"}}>Driver's cut</p>
          <p style={{paddingBottom:"10px"}} className='smallbox'><span style={{color:"rgb(192, 33, 33)"}}>$ </span>0.00</p>
        </div>
        <p style={{marginLeft:"57px"}} className='bigbox'><span style={{color:"rgb(192, 33, 33"}}>$ </span>0.00</p>
        <button className='btninvoice'>Send Invoice</button>
       </div>
       </div>

        </div>
        
  )
}

export default PendingOrders