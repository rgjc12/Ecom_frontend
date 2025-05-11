import React, {useEffect,useState,useRef} from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Lenis from "lenis";
import {useLocation,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,updateCart,deleteCart,deleteCartAll} from "../../store/Reducers/cartReducer";
import { toast } from 'react-toastify';

const Cart = () => {
    const lenis = new Lenis();
    const location = useLocation();
    const navigate=useNavigate();
    useEffect(() => {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  
      return () => lenis.destroy();
    }, [lenis]);
    useEffect(() => {
      lenis.stop();
      window.scrollTo(0, 0);
      lenis.start();
    }, [location]);














    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    

    const [totalquantity,setTotalquantity]=useState(0);
    useEffect(()=>{
      const totalQuantity=Array.isArray(cart.cart) && cart.cart.length > 0 ? cart.cart.reduce((acc,item)=>acc+item.quantity,0) : 0;
      setTotalquantity(totalQuantity);
    },[cart.cart]);

    const handleUpdate = (id,q) => {
        const updatedCart = cart.cart.map(item => 
            item._id === id ? { ...item, quantity: parseInt(q) } : item
        );
        dispatch(updateCart(updatedCart));
        localStorage.setItem("cart",JSON.stringify(updatedCart));
    }
    const handleDelete = (id) => {
        const updatedCart = cart.cart.filter(item => item._id !== id);
        dispatch(deleteCart(updatedCart));
        localStorage.setItem("cart",JSON.stringify(updatedCart));
    }
    const handleCheckout = () => {
        toast.success("Checkout Successfully");
        dispatch(deleteCartAll());
        localStorage.setItem("cart",JSON.stringify(null));        
    }


  return (
    <>
    <Navbar totalquantity={totalquantity}/>
    <div id="cartcontainer">
  <div id="cartleft">
    <div id="ctext">Your Cart</div>
    <div id="cartitems">
      {
        Array.isArray(cart.cart) && cart.cart.length > 0 ? cart.cart.map((product,index)=>{
          return <div className="cartitem" key={index}>
            <div className="cartitemleft">
            <div className="cartitemimage">
            <img src={product.image} alt={product.name} />
            </div>
            <div className="cartitemtextmain">

              <div className="txt">
            <div className="cartitemtext">{product.name}</div>
            <div className="instock">In stock</div>
            </div>
            <div className="cartitemquantity">
              <div className="cartitemquantity"> 

            <input className="cartitemquantityinput"
                      type="number" min="1"
                      value={product.quantity}
                      onChange={(e) => {
                        console.log(e.target.value);
                        handleUpdate(product._id,e.target.value);
                      }}
                    />
                      <button className="cartitemdelete" onClick={(e) => {
                    e.preventDefault();
                    handleDelete(product._id);
                  }}><i className="ri-delete-bin-5-fill"></i></button>
                  </div>
              
            </div>
            </div>
            </div>
            <div className="cartitemprice">₹{product.price}</div>
          

          </div>
        })
        :<div className="cartitem">
          <div className="cartitemtext">No items in cart</div>
        </div>
      }
       
    </div>
  </div>

  <div id="cartright">
    <div id="cartrighttext">Cart <span>Total</span></div>
    <div id="cartrighttotal">
      <div className="txt1">Subtotal({totalquantity} items):</div>
      <div className="txt2">₹{Array.isArray(cart.cart) && cart.cart.length > 0 ? cart.cart.reduce((acc, product) => acc + product.price * (cart.cart.find(item => item._id === product._id)?.quantity || 0), 0) : 0}</div>
    </div>
    <div id="cartrighttotal1">
      <div className="txt1">Shipping Fee</div>
      <div className="txt2">₹40</div>
    </div>
    <div id="cartrighttotal2">
      <div className="txt3">Total</div>
      <div className="txt2">₹{Array.isArray(cart.cart) && cart.cart.length > 0 ? cart.cart.reduce((acc, product) => acc + product.price * (cart.cart.find(item => item._id === product._id)?.quantity || 0), 0)+40 : 0}</div>
    </div>
    <div id="cartrightbutton">
      <button className="cartrightbutton" onClick={handleCheckout}>Proceed to Checkout</button>
      <button className="cartrightbutton" onClick={()=>navigate(-1)}>Continue Shopping</button>
    </div>

  </div>

  </div>
  <Footer/>
    </>
  )
};

export default Cart;