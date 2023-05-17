<<<<<<< HEAD

import StarRateIcon from '@mui/icons-material/StarRate';
import React, { useState } from "react";
=======
import React from 'react'
// import StarRateIcon from '@mui/icons-material/StarRate';
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761

const CustomerOrders = () => {
  const [starts, setstarts] = useState(true);
  const [finddull, setfindull] = useState(false);
  const [maininfo, setmaininfo] = useState(false);
  const [pics, setpics] = useState(false);
  const [homebase, sethomebase] = useState(false);
  const [sharpening, setsharpening] = useState(false);
  const [delivery, setdelivery] = useState(false);
  const [zelle, setzelle] = useState(false);
  const [rating, setrating] = useState(false);
  const [process, setprocess] = useState(false);
  const [feedback, setfeedback] = useState(false);
  const [payout, setpayout] = useState(false);
  const[location,setlocation]=useState(false)

  const handlestarts = (e) => {
    e.preventDefault()
    setstarts(false);
    setfindull(true);
  };
  const handlefinddull=(e)=>{
    e.preventDefault()
    setfindull(false);
    setmaininfo(true);
 }
 const handlemaininfo=(e)=>{
  e.preventDefault()
  setmaininfo(false)
  setpics(true)
 }
 const handlepics=(e)=>{
  e.preventDefault();
  setpics(false);
  sethomebase(true);
 }
 const handlehomebase=(e)=>{
  e.preventDefault()
  sethomebase(false);
  setlocation(true);
 }
 const handlelocation=(e)=>{
  e.preventDefault()
  setlocation(false);
  setsharpening(true);
 }
 const handlesharpening=(e)=>{
  e.preventDefault()
  setsharpening(false)
  setdelivery(true);
 }
 const handledelivery=(e)=>{
  e.preventDefault()
  setdelivery(false);
  setzelle(true);

 }
 const handlezelle=(e)=>{
  e.preventDefault()
  setzelle(false)
  setrating(true)
 }
 const handlerating=(e)=>{
  e.preventDefault()
  setrating(false)
  setprocess(true)
 }
  const handleprocess=(e)=>{
    e.preventDefault()
    setprocess(false)
    setfeedback(true)
  }
   const handlefeedback=(e)=>{
    e.preventDefault()
    setfeedback(false)
    setpayout(true)
   }
 



  return (
    <div style={{height:'10rem',color:'white',fontFamily:""}} className='orders' >
<<<<<<< HEAD
    {starts && (
        <>
     <form onSubmit={handlestarts} className='start' id='forms'>
      <h2>Welcome to company name</h2>
      <p>lets get you started on your journey to becoming an expert dull hunter </p>
      <div style={{marginTop:'120px'}}>
      <button  className='filled' type='submit'>I'm Ready!</button>
      <button className='unfilled'>Later </button>
      </div>
      </form>

      </>

       )}
     
      
        
     {finddull && (
      <>
     <form onSubmit={handlefinddull} action="" className='finddull' id='forms' style={{color:"black"}}>
=======

     <form className='start' id='forms'>
      <h2>Welcome to company name</h2>
      <p>lets get you started on your journey to becoming an expert dull hunter </p>
      <button className='unfilled'>Later </button>
      <button className='filled'>I'm Ready!</button>
      </form>
        
        <form action="" className='finddull' id='forms' style={{color:"black"}}>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h2>Lets hunt some dulls </h2>
          <p>The first step is to find a dull tool or blade!They can belong to you,your neighbour a friend
            even a stranger.Everyone has dulls!
          </p>
          <p style={{textAlign:"center"}}>Here are some ideas</p>
          <p>
          
           <p style={{fontWeight:"1000",textAlign:"center"}}>Knives &nbsp; &nbsp; scissors &nbsp; &nbsp; Garden tools <br/> Lawn mower blades &nbsp; & so many more</p>
<<<<<<< HEAD
            
          </p>
          <button style={{width:"180px"}} className='filled'>I've found a dull</button>
          </form>
          </>
)}

{maininfo && (
      <>
        <form onSubmit={handlemaininfo} action=""  style={{color:'black'}} className='maininfo' id='forms'>
=======
             
          
          
          </p>
          <button style={{width:"180px"}} className='filled'>I've found a dull</button>
        </form>

        <form action=""  style={{color:'black'}} className='maininfo' id='forms'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h1>Dulls acquired!</h1>
          <p>Plaese collect teh following information from the customer (if you are using the own dull
           for this input your own information)
          </p>
          <div className='infocollection'>
          <div className='infodiv'>
            <input type="text" placeholder='First name'  />
            <input type="text" placeholder='Last name' />
            </div>
            <div className='infodiv'>
            <input type="text" placeholder='Phone number' />
            <input type="text" placeholder='Adress' />
            </div>
          </div>
          <button className='filled'>Next </button>
        </form>
<<<<<<< HEAD
        </>
)}


{pics && (
      <>    <form onSubmit={handlepics} className='pics' id='forms'>
=======

        <form className='pics' id='forms'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h1>Snap a pic</h1>
           <p>Please take a picture of the order.Be sure to get  all of it in the frame!</p>
           <button className='filled'>Next</button>
        </form>
<<<<<<< HEAD
        </>)}

        {homebase && (
          <>
         <form action="" onSubmit={handlehomebase} className='homebase' id='forms'>
=======

         <form action="" className='homebase' id='forms'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h2>To home base</h2>
          <p>you're on roll!now lets bring the dulls to the home Base</p>
          <p>Even though they are dull,Sharp objects and tools,they should be well secured
            ,and placed so they will not hit the driver in the event  of a crash
          </p>
<<<<<<< HEAD
          <button style={{marginTop:"70px"}} className='filled'>Next</button>
         </form>
         </>)}
        

           
 {location && (
      <><form  action="" onSubmit={handlelocation} className='location' id='forms'>
=======
          <button className='filled'>Next</button>
         </form>
           

         <form action="" className='homebase' id='forms'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h2>To home base</h2>
          <p>Homebase is located at</p>
          <div className='homebaselink'>
          <a href="">5002 Fawn Lake DR </a> <br/>
          <a href="">San Antonio TX 76244</a> <br/>
          </div>
<<<<<<< HEAD
          <button style={{marginTop:"70px"}} className='filled'>Ive arrived!</button>
         </form>
         </>)}


         {sharpening && (
      <><form onSubmit={handlesharpening} action="" className='sharpening' id='forms'>
=======
          <button className='filled'>Next</button>
         </form>

         <form action="" className='sharpening' id='forms'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h1>Sharpenning in progress</h1>
          <p>Please wait while the order is sharpened.Depending on order volume,this may take some time</p>
          <p>You do not have to stay at home base while you wait.You will be notified when the order is ready
            to return to the customer
          </p>
<<<<<<< HEAD
          <button style={{marginTop:"60px"}} className='filled'>Next</button>
         </form>
         </>)}

         
       {delivery && (
        <>
         <form onSubmit={handledelivery} action="" id='forms' className='delivery'>
=======
          <button className='filled'>Next</button>
         </form>

         <form action="" id='forms' className='delivery'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h1>Return to customer</h1>
          <p>Now its time to take the tools back to the customer </p>
          <p>The tools are <span  style={{color: "#470e2d"}}>Exteremely sharp.</span>They are wrapped for your safety,but still should be well secured
           ,and placed so they will not hit the driver in the event of a crash</p>
        
         <p>As a reminder you picked up this tools from  </p>
         <p>customer address for orders</p>
         <button className='filled'>Delivered!</button>
<<<<<<< HEAD
         </form></> )}


       {zelle && (
        <>
         <form action="" id='forms' onSubmit={handlezelle} className='zelle'>
=======
         </form>


         <form action="" id='forms' className='zelle'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
         <h1>Its that easy</h1>
         <p>
          You have succesfully completed your interview Drive
         </p>
         <p>You will receive the payment for this order within  2 business days via zelle  to the phone number you signed up within</p>
         <p>To start your next order simply press the new order button on the dashboard</p>
<<<<<<< HEAD
         <div style={{marginTop:"30px"}}>
         <button className='filled' type='submit'>Next!</button>
         <button style={{width:"150px"}} className='unfilled'> I dont have Zelle!</button> 
         </div>
         </form> 
         </>)}

{rating && (
  <>
          <form action="" onSubmit={handlerating} className='rating' id='forms'>
            <h1>Want to add onother $ ammount</h1>
            <p>Just take 30 seconds to give us some feedback! </p>
            <h5>How would you rate this delivery?</h5>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <br/>
            <button style={{marginTop:"70px"}} className='filled'> No thanks</button>
          </form>
          </>)}

          {process && (
            <>
          <form action="" onSubmit={handleprocess} id='forms' className='process-sense'>
            <h1>Want to earn onother $ amount </h1>
            <p>Just take 30 seconds to give us some feedback! </p>
            <h5>Does the process make sense?</h5>
            <div style={{marginTop:"40px"}}>
            <button style={{float:"none"}} type='submit' className='filled'>Yes</button>
            <button style={{float:"none"}} type='submit' className='filled'>No</button>
            </div>
          </form>
          </>)}

          {feedback && (
            <>
          <form action="" onSubmit={handlefeedback} id='forms' className='feedback'>
=======
         <button style={{width:"150px"}} className='unfilled'> I dont have Zelle!</button>
         <button className='filled'>Next!</button>
         </form>

          <form action="" className='feedback' id='forms'>
            <h1>Want to add onother $ ammount</h1>
            <p>Just take 30 seconds to give us some feedback! </p>
            <h5>How would you rate this delivery?</h5>
            {/* <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/> */}
            <br/>
            <button className='filled'> No thanks</button>
          </form>

          <form action="" id='forms' className='process-sense'>
            <h1>Want to earn onother $ amount </h1>
            <h5>Does the process make sense?</h5>
            <button style={{float:"none"}} className='filled'>Yes</button>
            <button style={{float:"none"}} className='filled'>No</button>
          </form>

          <form action="" id='forms' className='feedback'>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
          <h1>Want to earn onother $ amount </h1>
          <p>Just take 30 second to give us some feedback</p>
          <h4>How can we improve</h4>
          <textarea id="feedback" name="feedback" rows="3" cols="25" placeholder='Feedback...'></textarea>
          <button className='filled'>Done</button>
          </form>
<<<<<<< HEAD
          </>
          )}

{payout && (
            <>
           <form action="" id='forms'  className='payout'>
           <h1>Want to earn onother $ amount </h1>
           <p>Thank you</p>
           <p>An extra $ Amount has been added to your payout</p>
           <button style={{width:"150px",float:"none",marginTop:"100px"}} className='filled'>Back to dashboard</button>
           </form>
           </>)}
=======
           
           <form action="" id='forms' className='payout'>
           <h1>Want to earn onother $ amount </h1>
           <p>Thank you</p>
           <p>An extra $ Amount has been added to your payout</p>
           <button style={{width:"150px",float:"none"}} className='filled'>Back to dashboard</button>
           </form>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761


      </div>
  )
}

export default CustomerOrders