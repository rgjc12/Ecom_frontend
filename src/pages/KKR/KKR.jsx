import React, {useEffect, useRef ,useState} from "react";
import './KKR.css'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Lenis from "lenis";
import {useLocation,useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Trending from "../../components/Trending/Trending";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../store/Reducers/cartReducer";
import Cursor from "../../components/Cursor/Cursor";
gsap.registerPlugin(ScrollTrigger,SplitText); 

function KKR() {
  const navigate=useNavigate();
  const lenis = new Lenis();
  const location = useLocation();
  const kt1 = useRef(null);
  const kt2 = useRef(null);
  const kt3 = useRef(null);
  const kt2i = useRef(null);





  const data = [
    {
      name: "Official KKR Hoodie",
      price: 3999,
      image: "/KKR/kt4.webp",
      description: "Men Purple and Black Colourblocked Full Sleeves Hooded Sweatshirt",
      category:"Hoodie",
      quantity:10,
      _id: 0
    },
    {
      name: "Black Casual T-shirt",
      price: 1999,
      image: "/KKR/kt1.webp",
      description: "Men Black Printed Half Sleeves Round Neck Cotton T-Shirt",
      category:"T-shirt",
      quantity:10,
      _id: 1
    },
    {
      name: "Polo T-shirt",
      price: 2399,
      image: "/KKR/kt2.webp",
      description: "Stylish polo with embroidered team crest",
      category:"T-shirt",
      quantity:10,
      _id: 2
    },
    {
      name: "White Casual T-shirt",
      price: 1899,
      image: "/KKR/kt3.webp",
      description: "Comfortable white tee with subtle graphics",
      category:"T-shirt",
      quantity:10,
      _id: 3
    }
  ];
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
  useGSAP(()=>{
    const mm=gsap.matchMedia();
    mm.add("(min-width: 490px)",()=>{
    gsap.set("#navbar",{
      y:"-6.5vw",
      opacity:0,

    })   
    gsap.set(".item-copy-wrapper p",{
      y:"5vw",
      opacity:0,
    })
    gsap.set(".letter-wrapper",{
      y:"20vw",      
    })
    gsap.defaults({
      duration:1.15,
      ease:"expo.out",
    })
    const tl = gsap.timeline({pause:true,delay:0.5});
    tl.to(".letter-wrapper",{
      y:0,
      stagger:0.15,
      opacity:1,
    }).to(".header-item-1",{
      left:"16.1vw",
    }).to(".header-item-2",{
      right:"5vw",
    },"<")
    .to(".item-main .item-img img",{
      clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },"<").to(".item-main .item-img img",{
        scale:1,
      }).to(".item-side .item-img",{
        clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        stagger:0.19,
      },"<").to(".kkrheader",{
        bottom:"-10vw",
        scale:2.1
      },"<").to(".item-copy-wrapper p",{
        y:0,
        opacity:1,
        stagger:0.19,
      },"<").to("#navbar",{
        y:0,
        opacity:1,
      },"<")
    })
  })
useGSAP(()=>{
  gsap.to("#kmain",{
    backgroundColor:"#1d1d1d",
    scrollTrigger:{
      trigger:"#kbottom2",     
      start:"top 28%",
      end:"top 45%",    
      scrub: 3
    }
  })
})



useEffect(() => {
  document.fonts.ready.then(() => {
    const profileImagesContainer = document.querySelector(".profile-images");
    const profileImages = document.querySelectorAll(".profile-images .img");
    const nameElements = document.querySelectorAll(".profile-names .name");
    const nameHeading = document.querySelectorAll(".profile-names .name h1");

    nameHeading.forEach((heading) => {
      const split = new SplitText(heading, { type: "chars" });
      split.chars.forEach((char) => {
        char.classList.add("letter1");
      });
    });

    const defaultLetters = nameElements[0].querySelectorAll(".letter1");
    gsap.set(defaultLetters, {
      y: "100%",
    });

    profileImages.forEach((img, index) => {
      const correspondingName = nameElements[index + 1];
      const letters = correspondingName.querySelectorAll(".letter1");

      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.25,
          boxShadow: "0 0 10px 0 #F2C029",
          duration: 0.5,
          ease: "expo.out",
        });
        gsap.to(letters, {
          y: "-100%",
          duration: 0.75,
          ease: "expo.out",
          stagger: {
            each: 0.025,
            from: "center",
          },
        });
        const cursor = document.querySelector("#cursor");
        cursor.innerHTML="<i class='ri-arrow-right-up-line'></i>";
        gsap.to(cursor,{
          scale:5.5,    
          fontSize:"1.5vw",         
          color:"#F2C029",
          duration:0.5,
          ease:"expo.out",
        })
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          boxShadow: "none",
          duration: 0.5,
          ease: "expo.out",
        });
        gsap.to(letters, {
          y: "0%",
          duration: 0.75,
          ease: "expo.out",
          stagger: {
            each: 0.025,
            from: "center",
          },
        });
        const cursor = document.querySelector("#cursor");
        cursor.innerHTML="";
        gsap.to(cursor,{
          scale:1,            
          duration:0.5,
          fontSize:"0vw",
          ease:"expo.out",
        })
      });
    });

    profileImagesContainer.addEventListener("mouseenter", () => {
      gsap.to(defaultLetters, {
        y: "0%",
        duration: 0.75,
        ease: "expo.out",
        stagger: {
          each: 0.025,
          from: "center",
        },
      });
    });

    profileImagesContainer.addEventListener("mouseleave", () => {
      gsap.to(defaultLetters, {
        y: "100%",
        duration: 0.75,
        ease: "expo.out",
        stagger: {
          each: 0.025,
          from: "center",
        },
      });
    });
  });
}, []);

 

  












const cart = useSelector((state)=>state.cart);
console.log(cart.cart);
const dispatch = useDispatch();
    const handleAddToCart = (id, q) => {      
  const currentCart = Array.isArray(cart.cart)
    ? cart.cart.map(item => ({ ...item }))
    : [];

  const existingItemIndex = currentCart.findIndex(item => item._id === id);

  if (existingItemIndex !== -1) {
    currentCart[existingItemIndex].quantity += q;
  } else {
    currentCart.push({ _id: id, quantity: q,image:data[id].image,name:data[id].name,price:data[id].price});
  }

  localStorage.setItem("cart", JSON.stringify(currentCart));
  dispatch(addToCart(currentCart));
};
const handlebuynow = (id,q) => {
  const currentCart = Array.isArray(cart.cart)
    ? cart.cart.map(item => ({ ...item }))
    : [];

  const existingItemIndex = currentCart.findIndex(item => item._id === id);

  if (existingItemIndex !== -1) {
    currentCart[existingItemIndex].quantity += q;
  } else {
    currentCart.push({ _id: id, quantity: q,image:data[id].image,name:data[id].name,price:data[id].price});
  }

  localStorage.setItem("cart", JSON.stringify(currentCart));
  dispatch(addToCart(currentCart));
  navigate("/cart");
}



const [totalquantity,setTotalquantity]=useState(0);
useEffect(()=>{
  const totalQuantity=cart.cart.reduce((acc,item)=>acc+item.quantity,0);
  setTotalquantity(totalQuantity);
},[cart.cart]);















  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [products, setProducts] = useState(data);

const handlePriceChange = (e) => {
  setSelectedPriceRange(e.target.value);
};

const applyFilter = () => {
  const filteredProducts = data.filter(product => {
    const price = product.price;
    const [min, max] = selectedPriceRange.split('-').map(Number);
    return price >= min && price <= max;
  }); 
  setProducts(filteredProducts);
};
  

  return (
    <div>
      <Cursor/>
     <Navbar totalquantity={totalquantity}/>
     <div id="kmain">
     <div id="ktop">
          <div id="container">
            <div id="items">
              <div className="item-col">
                <div id="item" className="item-side">
                  <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>19. Ramandeep Singh</p>
                    </div>
                    
                  </div>
                  <div className="item-img">
                    <img src="/KKR/k9.jpg"/>
                  </div>
                </div>
                <div id="item" className="item-side">
                <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>74. Sunil Narine</p>
                    </div>
                    
                  </div>
                  <div className="item-img">
                    <img src="/KKR/k6.jpg"/>
                  </div>
                </div>
                
              </div>
              <div className="item-col">
                <div id="item" className="item-main">
                  <div className="item-img">
                    <img src="/KKR/k3.jpg"/>
                  </div>
                </div>
              </div>
              <div className="item-col">
              <div id="item" className="item-side">
              <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>12. Andre Russell</p>
                    </div>
                   
                  </div>
                  <div className="item-img">
                    <img src="/KKR/k4.jpg"/>
                  </div>
              </div>
              <div id="item" className="item-side">
              <div className="item-copy">
                    <div className="item-copy-wrapper">
                      <p>56. Mitchell Starc</p>
                    </div>
                   
                  </div>
                  <div className="item-img">
                    <img src="/KKR/k8.jpg"/>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
            <div className="kkrheader">
              <div className="header-item header-item-1">
                <div className="letter"><div className="letter-wrapper">K</div></div>
                <div className="letter"><div className="letter-wrapper">K</div></div>
                <div className="letter"><div className="letter-wrapper">R</div></div>
              </div>
              <div className="header-item header-item-2">
                <div className="letter"><div className="letter-wrapper">S</div></div>
                <div className="letter"><div className="letter-wrapper">T</div></div>
                <div className="letter"><div className="letter-wrapper">O</div></div>
                <div className="letter"><div className="letter-wrapper">R</div></div>
                <div className="letter"><div className="letter-wrapper">E</div></div>
              </div>
            </div>
            <div id="kmid">
              <Trending data={data} handlebuynow={handlebuynow}/>
            </div>
            <div id="kbottom1">
               <div className="kb1headin">
                <h1>FLAUNT YOUR FANDOM</h1>
               </div>
               <div id="kkrproducts">
               <div id="filter">
  <h3>Filter by Price</h3>
  <form onSubmit={(e) => e.preventDefault()}>
    <label style={{ marginBottom: "8px" }}>
      <input
        type="radio"
        name="price"
        value="0-1000"
        className="square"
        onChange={handlePriceChange}
      />
      Rs. 0 - 1000
    </label>

    <label style={{marginBottom: "8px" }}>
      <input
        type="radio"
        name="price"
        value="1000-2000"
        className="square"
        onChange={handlePriceChange}
      />
      Rs. 1000 - 2000
    </label>

    <label style={{ marginBottom: "8px" }}>
      <input
        type="radio"
        name="price"
        value="2000-3000"
        className="square"
        onChange={handlePriceChange}
      />
      Rs. 2000 - 3000
    </label>

    <label style={{marginBottom: "8px" }}>
      <input
        type="radio"
        name="price"
        value="3000-4000"
        className="square"
        onChange={handlePriceChange}
      />
      Rs. 3000 - 4000
    </label>

    <label style={{ marginBottom: "12px" }}>
      <input
        type="radio"
        name="price"
        value="4000+"
        className="square"
        onChange={handlePriceChange}
      />
      More than Rs. 4000
    </label>

    <button type="button" className="filterbtn" onClick={applyFilter}>
      Filter
    </button>
  </form>
</div>



                <div id="products">
                  {products.map((product)=>(
                    <Product key={product._id} name={product.name} price={product.price} image={product.image} _id={product._id} quantity={product.quantity} handleAddToCart={handleAddToCart} handlebuynow={handlebuynow}/>
                  ))}
                </div>
               </div>

            </div>
            <div id="kbottom2">
             <div className="team">
              <div className="profile-images">
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
              }}><img src="/KKR/kp1.webp"/></div>
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}><img src="/KKR/kp5.webp"/></div>
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}><img src="/KKR/kp11.webp"/></div>
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}><img src="/KKR/kp10.webp"/></div>
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}><img src="/KKR/kp9.webp"/></div>
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}><img src="/KKR/kp7.webp"/></div>
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}><img src="/KKR/kp6.webp"/></div>
               <div className="img" style={{backgroundImage: `url(/KKR/k0.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
            }}><img src="/KKR/kp2.webp"/></div>              
                
              </div>
              <div className="profile-names">
                <div className="name default"><h1>OUR SQUAD</h1></div>
                <div className="name"><h1>VARUN</h1></div>
                <div className="name"><h1>DE KOCK</h1></div>
                <div className="name"><h1>RAHANE</h1></div>
                <div className="name"><h1>RINKU</h1></div>
                <div className="name"><h1>RUSSELL</h1></div>
                <div className="name"><h1>NARINE</h1></div>
                <div className="name"><h1>VENKY</h1></div>
                <div className="name"><h1>RANA</h1></div>
                <div className="name"><h1>NORTJE</h1></div>        

                
              </div>
             </div>
            </div>
            

     </div>
     <Footer/>
    </div>
  );
}

export default KKR
