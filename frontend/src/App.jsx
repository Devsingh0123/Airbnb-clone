import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ListingPage1 from './pages/ListingPage1'
import ListingPage2 from './pages/ListingPage2'

const App = () => {

  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/listingPage1" element={<ListingPage1/>} />
        <Route path="/listingPage2" element={<ListingPage2/>} />

      </Routes>
    </>
  )
}

export default App

