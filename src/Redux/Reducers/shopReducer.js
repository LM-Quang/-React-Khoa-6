// Emmet: rxslice to create a default structure
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   cart: [
      {
         id: 1,
         name: "Adidas Prophere",
         price: 350,
         quantity: 995,
         image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      },
   ],
   dataProduct: [
      {
         id: 1,
         name: "Adidas Prophere",
         alias: "adidas-prophere",
         price: 350,
         description:
            "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
         size: "[36,37,38,39,40,41,42]",
         shortDescription:
            "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
         quantity: 995,
         deleted: false,
         categories:
            '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
         relatedProducts: "[2,3,5]",
         feature: true,
         image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      },
      {
         id: 2,
         name: "Adidas Prophere Black White",
         alias: "adidas-prophere-black-white",
         price: 450,
         description:
            "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
         size: "[36,37,38,39,40,41,42]",
         shortDescription:
            "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
         quantity: 990,
         deleted: false,
         categories:
            '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
         relatedProducts: "[1,4,6]",
         feature: false,
         image: "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
      },
      {
         id: 3,
         name: "Adidas Prophere Customize",
         alias: "adidas-prophere-customize",
         price: 375,
         description:
            "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
         size: "[36,37,38,39,40,41,42]",
         shortDescription:
            "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
         quantity: 415,
         deleted: false,
         categories:
            '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
         relatedProducts: "[4,5,7]",
         feature: true,
         image: "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
      },
   ],
};

const shopReducer = createSlice({
   name: "shopReducer", // This is reducer's name => it then automatically creates an action name shopReducer/action
   initialState, // This is a default value of this reducer (as stateDefault of normal Reducer)
   reducers: {
      // This is where the switch(action.type) is called
      getProductApiAction: (state, action) => {
         state.dataProduct = action.payload;
      },
      addToCartAction: (state, action) => {
         const itemCart = state.cart.find((item) => item.id === action.payload.id);
         if (itemCart) {
            itemCart.quantity++;
         } else {
            state.cart.push(action.payload);
         }
      },
   },
});

export const { getProductApiAction, addToCartAction } = shopReducer.actions;

export default shopReducer.reducer;

// -------------------------- Action thunk ------------------------
export const getAllProductApi = () => {
   return async (dispatch, getState) => {
      try {
         const result = await axios({
            url: "https://shop.cyberlearn.vn/api/Product",
            method: "GET",
         });
         // Dispatch to reducer
         dispatch(getProductApiAction(result.data.content));
         /* when dispatch the above function => it automatically create a 
            dispatch({
               type:'shopReducer/getProductApiAction, 
               payload:result.data.content'
            }) */
      } catch (error) {
         console.log("error", error);
      }
   };
};
