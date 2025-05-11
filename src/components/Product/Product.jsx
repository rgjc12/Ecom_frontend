import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css"

function Product({image,name,price,_id,quantity,handleAddToCart,handlebuynow}) {
  
  return (
   <>
     <div className="card"
          style={{
            backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >         
          <div className="wrapper10" style={{border:`2px solid #F2C029`}}>       
          <img src={image}/>
      </div>
              
      <div className="cardbot">
        <div className="bottext"><h3 style={{textDecoration: "none !important", color:`#F2C029`}}>{name}</h3></div>
        <div className="price"><h3 style={{textDecoration: "none !important", color:`#F2C029`}}>₹&nbsp;{price}</h3><h3 style={{textDecoration: "none !important", color:`#F2C029`}}>{quantity}&nbsp;&nbsp;left</h3></div>
        <div className="botbut">
          <button className="but1" style={{
            background:`#F2C029`,color:`#352350`}} onClick={()=>handleAddToCart(_id,1)}>Add to Cart</button>
          <button className="but2"style={{
            background:`#F2C029`,color:`#352350`}} onClick={()=>handlebuynow(_id,1)}>Buy Now</button>
        </div>
        </div>      
    </div>
   </>
  )
}

export default Product
