import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SlKey } from "react-icons/sl";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
=======
import { Link } from "react-router-dom";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
  const handleNext = (e) => {
    e.preventDefault()
    setStep(step + 1);
  };
  const handlePrev = (e) => {
    e.preventDefault()
    setStep(step - 1);
<<<<<<< HEAD
  };
  const handleLogin = (e) => {
    e.preventDefault()
    setStep(step + 4);
  };

  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");
  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
  };

  console.log(tell);
  console.log(email);
  const [form, setForm] = useState({
    ...initialValues,
    email: "",
    tell: "",
  });
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      email,
      tell,
    }));
  }, [email, tell]);
  console.log("form", form);
  const initialState = {
    email: "",
    password: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register({ form, navigate, toast }));
  };
  const [formValue, setUser] = useState(initialState);
  const { password } = formValue;

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (password) {
      dispatch(login({ formValue, navigate, toast }));
      
    }
=======
  };
  const handleLogin = (e) => {
    e.preventDefault()
    setStep(step + 4);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("Registration submitted:", {
      firstName,
      lastName,
      email,
      password,
    });
    // TODO: submit registration data to backend
    handleNext();
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted:", { email, password });
    // TODO: submit login data to backend
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
  };
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowElement(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="MultiStepForm">
<<<<<<< HEAD
      <div className="Card" style={{ height: step === 1 || step===4 || step==5 ? "490px" : "380px" }}>
        {step === 1 && (
          <div className="register">
          <h3 style={{marginTop:'4.8rem'}}>Sign up to be a driver</h3>
          <form  className="form">
=======
      <div className="Card" style={{ height: step === 1 || step===4 || step==5 ? "515px" : "380px" }}>
        {step === 1 && (
          <div className="register">
          <h3 style={{marginTop:'4.8rem'}}>Sign up to be a driver</h3>
          <form onSubmit={handleRegisterSubmit} className="form">
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
            <div className="input">
              <span>
                <MdLocationOn style={{ background: "" }} />
              </span>
              <input
                type="text"
                placeholder=" &nbsp; Your postal code/ zip code"
              />
            </div>
<<<<<<< HEAD
            
=======
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
            <button onClick={handleNext} className="reg-btn">
              Start earning Today
            </button>
            <button onClick={handleLogin} className="reg-btns">
              Existing user? login
            </button>
          </form>
        </div>
        )}
         {step === 2 && (
          <div className="register">
<<<<<<< HEAD
          <form   className="form">
=======
          <form  onSubmit={handleRegisterSubmit} className="form">
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
          <h3 style={{marginBottom:'1.6rem'}}>Sign up to be a driver</h3>

            <div style={{marginBottom:'2rem'}}  className="input">
              <span>
                <MdEmail style={{ background: "" }} />
              </span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder=" &nbsp; Email Address"
              />
            </div>
            <div style={{marginBottom:'3rem'}}  className="next-reg">
              <div className="icon">
                <AiOutlineArrowLeft
                  fontWeight={600}
                  style={{ cursor: "pointer", fontWeight: "800" }}
                  size={30}
                  onClick={handlePrev}
                  color="#700841"
                />
              </div>
              
              <button style={{marginBottom:''}} onClick={(e)=>setStep(step+1)} className="regbtnnext">Next</button>
            </div>
          </form>
        </div>
        )}
        <div className="Card">
        
        </div>
         {step === 3 && (
         <div className="register">
         <form className="form">
         <h3 style={{marginBottom:'1.6rem'}}>Sign up to become a driver </h3>

           <div style={{marginBottom:'2rem'}}  className="input">
             <span>
               <FaPhoneAlt style={{ background: "" }} />
             </span>
             <input
               onChange={(e) => setTell(e.target.value)}
               type="number"
               placeholder=" &nbsp; Your phone number"
             />
           </div>
           <div style={{marginBottom:'3rem'}}  className="next-reg">
             <div className="icon">
               <AiOutlineArrowLeft
                 fontWeight={600}
                 style={{ cursor: "pointer", fontWeight: "800" }}
                 size={30}
                 onClick={handlePrev}
                 color="#700841"
               />
             </div>
             
             <button  onClick={handleNext} className="regbtnnext">Next</button>
           </div>
         </form>
       </div>
        )}
         {step === 4 && (
          <div className="register">
<<<<<<< HEAD
          <h3 style={{marginTop:'3rem'}}>Sign up to become a driver </h3>
          <form  onSubmit={handleSubmit} className="form">
            <div style={{marginTop:'0rem'}} className="input">
=======
          <h3 style={{marginTop:'2rem'}}>Sign up to become a driver </h3>
          <form  className="form">
            <div style={{marginTop:'1rem'}} className="input">
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
              <input
                type="text"
                onChange={(e) =>
                  setForm({ ...form, firstname: e.target.value })
                }
                placeholder=" First Name"
              />
            </div>
            <div className="input">
              <input
                type="text"
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                placeholder=" Last Name"
              />
            </div>
            <div className="input">
              <span>
                <SlKey style={{ background: "" }} />
              </span>
              <input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                placeholder=" &nbsp; Password "
              />
            </div>
            <div className="input">
              <span>
                <SlKey style={{ background: "" }} />
              </span>
              <input type="password" placeholder=" &nbsp; Confirm Password" />
            </div>
            <div  className="next-reg">
              <div className="icon">
                <AiOutlineArrowLeft
                  fontWeight={600}
                  style={{ cursor: "pointer", fontWeight: "800" }}
                  size={30}
                  onClick={handlePrev}
                  color="#700841"
                />
              </div>
<<<<<<< HEAD
             
              <button  className="regbtnnext">
                SignUp
              </button>
=======
              <Link to="/dashboard">
              <button  className="regbtnnext">
                SignUp
              </button>
              </Link>
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
            </div>
          </form>
          
        </div>
        
        )}
         {step === 5 && (
          <div className="register">
          <h3 style={{marginTop:'3rem'}}>Driver Login</h3>
<<<<<<< HEAD
          <form onSubmit={handleSubmit1}  className="form">
=======
          <form  className="form">
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
            <div className="input">
              <span>
                <MdEmail style={{ background: "" }} />
              </span>
              <input
                type="email"
                onChange={(e) =>
                  setUser({ ...formValue, email: e.target.value })
                }
                placeholder=" &nbsp; email"
              />
            </div>
            <div className="input">
              <span>
                <SlKey style={{ background: "" }} />
              </span>
              <input
                type="password"
                onChange={(e) =>
                  setUser({ ...formValue, password: e.target.value })
                }
                placeholder=" &nbsp; password"
              />
            </div>
<<<<<<< HEAD
           
=======
            <Link to='/dashboard'>
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
            <button className="reg-btn">
              {/* {" "} */}
              Log in
            </button>
<<<<<<< HEAD
            {/* </Link> */}
=======
            </Link>
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
            <button className="reg-btns" onClick={(e)=>setStep(step-4)}>
            New user? Sign up
          </button>
          </form>
          
        </div>
         )}
      </div>
    </div>
  );
}

export default MultiStepForm;
