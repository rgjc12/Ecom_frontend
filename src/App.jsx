import React,{ useState,useEffect } from 'react';
import './App.css';
import { Routes,Route } from "react-router"

import KKR from './pages/KKR/KKR'
import Cart from './pages/Cart/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<KKR/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App


