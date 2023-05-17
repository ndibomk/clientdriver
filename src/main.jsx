import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import Login from './pages/Admin/Login'
import PendingOrders from './pages/Admin/PendingOrders'
import RecentFeedback from './pages/Admin/RecentFeedback'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    {/* <App /> */}
    <RecentFeedback/> 
     {/* <Login/>  */}
     <PendingOrders/>
     
  
    </Provider>
    </BrowserRouter>
    
   
  </React.StrictMode>,
)

