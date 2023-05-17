import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
// import Login from './pages/authentication/Login'
import Hero from './pages/Hero';
import Main from './pages/Main';
import Test from './pages/Test';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/authSlice';
import Pedding from './pages/status/Pedding';
import Success from './pages/status/Success';
import Rejected from './pages/status/Rejected';
import CustomerOrders from './pages/Orders/CustomerOrders';
<<<<<<< HEAD
import AdminDashBoard from './pages/AdminDashBoard';
import SingleUser from './pages/users/SingleUser';
import UserOrders from './pages/users/UserOrders';
import Analytics from './pages/Analytics';
import Feedback from './pages/Feedback';
=======
import Login from './pages/Admin/Login';
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
function App() {
  const dispatch = useDispatch();
  const[data,setDate]=useState([])
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log('user',user);
  return (
    <>
    <ToastContainer/>
    {/* <Test/> */}
     {/* <Header/> */}
     {/* <BrowserRouter> */}
    
     <Routes>
     <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
     <Route path='/admin' element={<AdminDashBoard/>}>
     <Route path='pending' element={<Pedding/>}/>
     <Route index  element={<Success/>}/>
     <Route path='rejected' element={<Rejected/>}/>
     </Route>
=======
     <Route path='/dashboard' element={<Main/>}>
     <Route path='pending' element={<Pedding/>}/>
     <Route path='succes' element={<Success/>}/>
     <Route path='rejected' element={<Rejected/>}/></Route>
>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
     <Route path='/login' element={<Login/>}/>
     <Route path='/orders' element={<CustomerOrders/>}/>
     {/* <ProtectedRoutes path="/dashboard" component={<Main/> }/> */}
     <Route path='/dashboard' element={<Main/>}/>
     <Route path='user/:id' element={<SingleUser/>}/>
     <Route path='/orders/:id' element={<UserOrders/>}/>
     <Route path='/analytics' element={<Analytics/>}/>
     {/* <Route path='/feedback' element={<Feedback/>}/> */}

     </Routes> 
<<<<<<< HEAD
     {/* <Home/> */}
     {/* <Footer/> */}
=======

    {/* <Home/>
     <Footer/>  */}
     {/* <Home/> */}
     <Footer/>

>>>>>>> d894d11efaf6644acf01bf6dc6008bb4aa05b14c
     {/* </BrowserRouter> */}
     
    </>
  )
}

export default App
