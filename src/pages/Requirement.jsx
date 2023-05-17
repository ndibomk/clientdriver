import React from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";

import {BsFiletypeDoc} from "react-icons/bs"



=======
import Test from "./Circles";
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761

function Requirement() {
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <div className="requiremain">
      <h5 style={{ fontSize: "2rem" }}>Requirements</h5>
      <div className="test-Line" style={{ marginLeft: "8rem" }}>
        <Test />
      </div>

      <div className="Requirement">
        <div className="circle2">
          
          {/* <div className="circle">
            <h1 className="number">1</h1>
          </div> */}
          <div className="content">
            <p style={{marginBottom:"30px"}}> <BsFillPeopleFill size={50} style={{color:"#760945"}}/></p>
        
            <p style={{ color: "#760c46", fontSize: "1.6rem" }}>Age  </p>
            <p>Our drivers must be 18+ </p>
          </div>
<<<<<<< HEAD

          {/* <div className={user ? 'user-class' : 'line'}>
    </div>        */}
     </div>
=======
          {/* <div className={user ? "user-class" : "line"}></div>  */}
        </div>
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761

        <div className="circle1">
       

     
   
 

          {/* <div className="circle">
            <h1 className="number2">2</h1>
          </div> */}
          <div className="content">
            <p style={{marginBottom:"30px"}}>< AiFillCar size={50} style={{color:"#760945" }}/></p>
            <p style={{ color: "#760c46", fontSize: "1.6rem" }}>
              Transportation 
            </p>
            <p>
              
              Our drivers will be carrying orders to and from the 'Home base' on
              a regular basis
            </p>
          </div>
<<<<<<< HEAD
          {/* <div className={user ? 'user-class' : 'lines'}></div> */}
=======
          {/* <div className={user ? "user-class" : "lines"}></div> */}
>>>>>>> c5036866d6389caffdd2e14fb3327c0e1b7cb761
        </div>
        <div className="circle3">
          {/* <div className="circle">
            <h1 className="number3">3</h1>
          </div> */}
          <div className="content">
            <p style={{marginBottom:"30px"}}><BsFiletypeDoc size={50} style={{color:"#760945"}}/></p>
            <p style={{ color: "#760c46", fontSize: "1.6rem"}}>
              Documentation
            </p>
            <p>Valid Driver Licence</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirement;
