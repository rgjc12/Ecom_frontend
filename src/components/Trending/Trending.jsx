import React, { useContext, useEffect, useState } from "react";
import "./Trending.css";
import { useDispatch, useSelector } from 'react-redux';
function Trending({data,handlebuynow}) {
    
   
    const [dimensions, setDimensions] = useState({
        height: window.innerWidth > 490 ? "40vw" : "32vh",
        width: "100vw",
        });     
       useEffect(() => {
          const updateDimensions = () => {
    
            setDimensions({
              height: window.innerWidth > 490 ? "40vw" : "32vh",
              width: "100vw",
            });
           
          };
          window.addEventListener("resize", updateDimensions);
          return () => window.removeEventListener("resize", updateDimensions);
    
        }, []);

        const [trendingProducts, setTrendingProducts] = useState([]);
        const [selectedProduct, setSelectedProduct] = useState(null);
        useEffect(() => {
            setTrendingProducts(data.slice(0, 2));
            setSelectedProduct(data[0]);
        }, [data]);      


        const handleProductClick = (idx) => {
            const product = trendingProducts.find((item) => item._id === idx);
            setSelectedProduct(product);
          };
        

        





  return (
   <>
      
      <div
  className="tr"
  style={{
    height: dimensions.height,
    width: dimensions.width,
    backgroundImage: `url("/KKR/k4.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",            
  }}
>

          <div className="trtext" style={{ color: `#F2C029` }}>
            <h1>#TRENDING</h1>
          </div>

          <div className="trwrapl"
            style={{
              height: "36vw",
              width: "60vw",
              marginLeft: "2vw",
              backgroundColor: `#F2C029`,            
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",                        
            }}
          >
            {selectedProduct ? (
                <div className="selected">
              <div className="desbox">
                <div className="dboxt"  style={{color:`#352350`}}>
                    <h1>{selectedProduct.name}</h1>
                </div>
                <div className="dboxm">
                    <h3>{selectedProduct.description}</h3>
                </div>
                <div className="dboxb">
                    <div className="bl">Rs.{selectedProduct.price}</div>
                    <div className="br"><button className="but10"style={{backgroundColor:`#352350`,color:`#F2C029`}} onClick={()=>handlebuynow(selectedProduct._id,1)}>BUY NOW</button></div>
                </div>
              </div>
                <div className="desimg">
                    <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }} />
  
                </div>
              </div>
            ) : (
              <p>Select a product to see details</p>
            )}
          </div>

         
          <div className="trwrapr">
            {trendingProducts.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="imgdiv"
                  style={{                    
                    border:`2px solid #F2C029`,
                    cursor: "pointer",
                  }}
                  onClick={() => handleProductClick(item._id)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", borderRadius: "0px", objectFit: "cover" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
   </>
  )
}

export default Trending
