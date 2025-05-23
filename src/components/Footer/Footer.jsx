import React, { useState,useRef,useEffect} from "react";
import "./Footer.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useGSAP(()=>{
        const links=document.querySelectorAll(".link a");
        const socials=document.querySelectorAll("#socials p");
        const mm=gsap.matchMedia();
        mm.add("(min-width: 490px)",()=>{
        gsap.to(links,{
          transform:"translateY(0)",
          opacity:1,
          stagger:0.026,
          ease:"expo.out",
          duration:1.99,
          scrollTrigger:{
            trigger:"#footer",
            start:"top 45%",
            end:"top -7%",
            scrub:true,
          
          }
      })
      gsap.to(socials,{
        transform:"translateY(0)",
        opacity:1,
        stagger:0.025,
        ease:"expo.out",
        duration:1.99,
        scrollTrigger:{
          trigger:"#footer",
          start:"top 45%",
          end:"top -7%",
          scrub:true,
          
        }
      })
      gsap.to("#video-wrapper",{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease:"expo.out",
        duration:3,
        scrollTrigger:{
          trigger:"#footer",
          start:"top 19%",
          end:"top -10%",
          scrub:true,
         
        }
      })
      gsap.to("#header span",{
        rotateY:0,
        transform:"scale(0.75)",             
        stagger:0.4,                
        opacity:1,
        ease:"expo.out",
        duration:2.1,
        scrollTrigger:{
          trigger:"#footer",
          start:"top 19%",
          end:"top -10%",
          scrub:true,
         
        }

      })
    })
    })
  return (
    <>
    <div id="footer">
    <div id="fleft">
      
      <div id="fmain">
      <span>I</span><span>P</span><span>L</span><span>Z</span><span>O</span><span>N</span><span>E</span>
      </div>
      <div id="links">
        <div className="link" ><a href="#"  id="on"><i className="ri-arrow-right-up-line"></i>&nbsp;Contact Us</a></div>
        <div className="link"><a href="#" className="off"><i className="ri-arrow-right-up-line closed" id="off"></i>&nbsp;About Us</a></div>
        <div className="link"><a href="#" className="off"><i className="ri-arrow-right-up-line closed" id="off"></i>&nbsp;Privacy Policy</a></div>
        <div className="link"><a href="#" className="off"><i className="ri-arrow-right-up-line closed" id="off"></i>&nbsp;Terms & Conditions</a></div>
      </div>
      <div id="video-wrapper">
        <video src="/Video/v1.mp4" autoPlay loop muted playsInline></video>
      </div>
      </div>
      <div id="fright">
          <div id="socials">
            <div className="sub-col">
              <p>Kalna Gate,Khan Pukur</p>
              <p>West Bengal, India</p>
              <div className="spacediv"></div>
              <p>+91 xxxxxxxxx</p>
              <p>info@iplzone.com</p>
            </div>
            <div className="sub-col">
              <a href="https://www.instagram.com/iplzone.in/"><p>INSTAGRAM</p></a>
              <a href="https://www.facebook.com/iplzone.in/"><p>FACEBOOK</p></a>
              <a href="https://twitter.com/iplzone.in"><p>TWITTER</p></a>
              <a href="https://www.youtube.com/@iplzone.in"><p>YOUTUBE</p></a>
              <div className="spacediv"></div>
             
            </div>
          </div>
          <div id="header">
          <span>I</span><span>P</span><span>L</span><span>Z</span><span>O</span><span>N</span><span>E</span>
          </div>
        </div>
    </div>
    </>
  )
};

export default Footer;