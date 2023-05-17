import React, { useState } from 'react'
import Hero from './Hero'
import Requirement from './Requirement'
import About from './About'
import Footer from '../components/Footer'
import Questions from './Q&A'
import Partnership from './Partnership'
import RegNext from './authentication/RegNext'
import ExpenseTracker from './Draw'
import TestForm from '../components/TestForm'
import Test from './Circles'
import Cards from './authentication/RegNext'
import App from './authentication/Register'
function Home() {
  
  return (
    <div >
      {/* <Test/> */}
        <Hero/>
        <Requirement/>
        <About/>
        <Questions/>
        <Partnership/>
        {/* <App/> */}
        {/* <TestForm/> */}
        {/* <Cards/> */}


        
    </div>
  )
}

export default Home