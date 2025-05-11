import React,{useEffect,useRef} from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import "./Cursor.css"


export default function Cursor() {
    const cursorRef= useRef(null);
    useGSAP(() => {
        const setX = gsap.quickTo(cursorRef.current, "x", {
          duration: 0.4,
          ease: "expo.out",
        });
      
        const setY = gsap.quickTo(cursorRef.current, "y", {
          duration: 0.4,
          ease: "expo.out",
        });
      
        const moveHandler = (e) => {
          setX(e.pageX);
          setY(e.pageY);
        };
      
        window.addEventListener("mousemove", moveHandler);
        return () => window.removeEventListener("mousemove", moveHandler);
      }, []);
      
  return (
    <div>
      <div id="cursor" ref={cursorRef}>        
      </div>
    </div>
  )
}
