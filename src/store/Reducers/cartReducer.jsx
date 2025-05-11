import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
      },      
    reducers:{        
        addToCart: (state, action) => {
            state.cart = action.payload;
          },          
            getCart: (state, action) => {
              state.cart = action.payload; 
            },
            updateCart: (state, action) => {
              state.cart = action.payload; 
            },
            deleteCart: (state, action) => {
              state.cart = action.payload; 
            },
            deleteCartAll: (state, action) => {
              localStorage.setItem("cart",JSON.stringify(null));
              state.cart = null;     
            }
        
    }
})

export const {addToCart,getCart,updateCart,deleteCart,deleteCartAll} = cartSlice.actions;
export default cartSlice.reducer;
