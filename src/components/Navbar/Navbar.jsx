import React,{ useState,useEffect,useRef} from 'react';
import './Navbar.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector,useDispatch } from 'react-redux';

const Navbar = ({totalquantity}) => {
    
    const nrl = useRef(null);
    const nund1 = useRef(null);
    const nrr1 = useRef(null);
    const nund3 = useRef(null);
    const nrr = useRef(null);
    const nund2 = useRef(null);




    useGSAP(()=>{       
        nrl.current.addEventListener("mousemove",()=>{
          gsap.to(nund1.current,{
            width:"100%",
            duration:1,
            ease:"expo.out"
          })
        });
        nrl.current.addEventListener("mouseleave",()=>{
          gsap.to(nund1.current,{
            width:"0%",
            duration:1,
            ease:"expo.out"
          })
        });
        nrr.current.addEventListener("mousemove",()=>{
          gsap.to(nund2.current,{
            width:"100%",
            duration:1,
            ease:"expo.out"
          })
        });
        nrr.current.addEventListener("mouseleave",()=>{
          gsap.to(nund2.current,{
            width:"0%",
            duration:1,
            ease:"expo.out"
          })
        });
        nrr1.current.addEventListener("mousemove",()=>{
          gsap.to(nund3.current,{
            width:"100%",
            duration:1,
            ease:"expo.out"
          })
        });
        nrr1.current.addEventListener("mouseleave",()=>{
          gsap.to(nund3.current,{
            width:"0%",
            duration:1,
            ease:"expo.out"
          })
        });
      })
    

  return (
   <>
   <div id="navbar">
    <div id="nav-l">
        <div id="nav-l-logo">
            <img src="/kkr_logo.png" alt="kkr_logo"/>
        </div>

    </div>
    <div id="nav-r">
    <div id="nr-t">
  <a href="https://www.facebook.com" className="icon-link">
    <i className="ri-facebook-circle-line icon line"></i>
    <i className="ri-facebook-circle-fill icon fill"></i>
  </a>
  <a href="https://www.instagram.com" className="icon-link">
    <i className="ri-instagram-line icon line"></i>
    <i className="ri-instagram-fill icon fill"></i>
  </a>
  <a href="https://www.twitter.com" className="icon-link">
    <i className="ri-twitter-x-line icon line"></i>
    <i className="ri-twitter-x-fill icon fill"></i>
  </a>
  <a href="https://www.youtube.com" className="icon-link">
    <i className="ri-youtube-line icon line"></i>
    <i className="ri-youtube-fill icon fill"></i>
  </a>
</div>

        <div id="nr-b">
        <NavLink to="/login" style={{ textDecoration: "none",color:"whitesmoke"}}>
       <div id="navr-l" ref={nrl}><i className="ri-account-circle-fill"></i>&nbsp;Log Out 
        <div className="nunder1" ref={nund1}></div>
        </div>
        </NavLink> 
        <NavLink to={`/orders`}style={{ textDecoration: "none",color:"whitesmoke"}}>
        <div id="navr-r" ref={nrr1}><div id="nrrtext"><i className="ri-shopping-bag-4-fill"></i>&nbsp;Orders
        </div>
        <div className="nunder3" ref={nund3}></div>
        </div>
        </NavLink>
        <NavLink to={`/cart`}style={{ textDecoration: "none",color:"whitesmoke"}}>
        <div id="navr-r" ref={nrr}><div id="nrrtext"><i className="ri-shopping-bag-4-fill"></i>&nbsp;Cart&nbsp;
        <div id="cartcircle1">{totalquantity}</div></div>
        <div className="nunder2" ref={nund2}></div>
        </div>
        </NavLink>
        </div>
    </div>
   </div>
   </>
  )
}

export default Navbar
