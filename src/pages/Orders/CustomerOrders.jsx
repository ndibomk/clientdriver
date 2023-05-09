import React from 'react'
// import StarRateIcon from '@mui/icons-material/StarRate';

const CustomerOrders = () => {
  return (
    <div style={{height:'10rem',color:'white',fontFamily:""}} className='orders' >

     <form className='start' id='forms'>
      <h2>Welcome to company name</h2>
      <p>lets get you started on your journey to becoming an expert dull hunter </p>
      <button className='unfilled'>Later </button>
      <button className='filled'>I'm Ready!</button>
      </form>
        
        <form action="" className='finddull' id='forms' style={{color:"black"}}>
          <h2>Lets hunt some dulls </h2>
          <p>The first step is to find a dull tool or blade!They can belong to you,your neighbour a friend
            even a stranger.Everyone has dulls!
          </p>
          <p style={{textAlign:"center"}}>Here are some ideas</p>
          <p>
          
           <p style={{fontWeight:"1000",textAlign:"center"}}>Knives &nbsp; &nbsp; scissors &nbsp; &nbsp; Garden tools <br/> Lawn mower blades &nbsp; & so many more</p>
             
          
          
          </p>
          <button style={{width:"180px"}} className='filled'>I've found a dull</button>
        </form>

        <form action=""  style={{color:'black'}} className='maininfo' id='forms'>
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

        <form className='pics' id='forms'>
          <h1>Snap a pic</h1>
           <p>Please take a picture of the order.Be sure to get  all of it in the frame!</p>
           <button className='filled'>Next</button>
        </form>

         <form action="" className='homebase' id='forms'>
          <h2>To home base</h2>
          <p>you're on roll!now lets bring the dulls to the home Base</p>
          <p>Even though they are dull,Sharp objects and tools,they should be well secured
            ,and placed so they will not hit the driver in the event  of a crash
          </p>
          <button className='filled'>Next</button>
         </form>
           

         <form action="" className='homebase' id='forms'>
          <h2>To home base</h2>
          <p>Homebase is located at</p>
          <div className='homebaselink'>
          <a href="">5002 Fawn Lake DR </a> <br/>
          <a href="">San Antonio TX 76244</a> <br/>
          </div>
          <button className='filled'>Next</button>
         </form>

         <form action="" className='sharpening' id='forms'>
          <h1>Sharpenning in progress</h1>
          <p>Please wait while the order is sharpened.Depending on order volume,this may take some time</p>
          <p>You do not have to stay at home base while you wait.You will be notified when the order is ready
            to return to the customer
          </p>
          <button className='filled'>Next</button>
         </form>

         <form action="" id='forms' className='delivery'>
          <h1>Return to customer</h1>
          <p>Now its time to take the tools back to the customer </p>
          <p>The tools are <span  style={{color: "#470e2d"}}>Exteremely sharp.</span>They are wrapped for your safety,but still should be well secured
           ,and placed so they will not hit the driver in the event of a crash</p>
        
         <p>As a reminder you picked up this tools from  </p>
         <p>customer address for orders</p>
         <button className='filled'>Delivered!</button>
         </form>


         <form action="" id='forms' className='zelle'>
         <h1>Its that easy</h1>
         <p>
          You have succesfully completed your interview Drive
         </p>
         <p>You will receive the payment for this order within  2 business days via zelle  to the phone number you signed up within</p>
         <p>To start your next order simply press the new order button on the dashboard</p>
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
          <h1>Want to earn onother $ amount </h1>
          <p>Just take 30 second to give us some feedback</p>
          <h4>How can we improve</h4>
          <textarea id="feedback" name="feedback" rows="3" cols="25" placeholder='Feedback...'></textarea>
          <button className='filled'>Done</button>
          </form>
           
           <form action="" id='forms' className='payout'>
           <h1>Want to earn onother $ amount </h1>
           <p>Thank you</p>
           <p>An extra $ Amount has been added to your payout</p>
           <button style={{width:"150px",float:"none"}} className='filled'>Back to dashboard</button>
           </form>


      </div>
  )
}

export default CustomerOrders