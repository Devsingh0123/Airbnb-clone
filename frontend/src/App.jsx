import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ListingPage1 from './pages/ListingPage1'
import ListingPage2 from './pages/ListingPage2'
import ListingPage3 from './pages/ListingPage3'
import { userDataContext } from './context/UserContext'
import MyListing from './pages/MyListing'

const App = () => {

  let {userData} = useContext(userDataContext)
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        
        <Route path="/listingpage1" element={userData != null ? <ListingPage1/>: <Navigate to={"/"}/> } />
        <Route path="/listingpage2" element={userData != null ? <ListingPage2/>: <Navigate to={"/"}/> } />
        <Route path="/listingpage3" element={userData != null ? <ListingPage3/>: <Navigate to={"/"}/> } />
        <Route path="/mylisting" element={userData != null ? <MyListing/>: <Navigate to={"/"}/> } /> 





         {/* <Route path="/listingpage1" element={<ListingPage1/> } />
        <Route path="/listingpage2" element={<ListingPage2/> } />
        <Route path="/listing[age3" element={<ListingPage3/> } /> 
        <Route path="/mylisting" element={<MyListing/> } />  */}


      </Routes>
    </>
  )
}

export default App

