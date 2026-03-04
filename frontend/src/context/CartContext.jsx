import { createContext, useContext, useState,useEffect } from "react";
import axios from 'axios';

const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
  const BASE_URL=import.meta.env.VITE_DJANGO_BASE_URL;
  const [cartItems, setCartItems] = useState([]);
  const [total,setTotal] = useState(0);

  const addToCart = async (productID) => {
  	try{
	await fetch(`${BASE_URL}/api/cart/add/`, {
	method: "POST",
	headers: {
		"Content-Type":"application/json",
	},
		body: JSON.stringify({product_id: productID})
	})
	
		fetchCart();
			
	}catch(error){
		console.log("error is ", error)
	}
  };

  const removeFromCart = async(itemId) => {
	  try{
		 await fetch(`${BASE_URL}/api/cart/remove/`,{
			method: "POST",
			 headers: {
				 "Content-Type":"application/json",

			 },
			 body: JSON.stringify({item_id: itemId}),
		 })

		  fetchCart();

	  }catch(error){
 		console.log("error is", error)
	  }
  };

  const updateQuantity = async(itemId, quantity) => {
	  if (quantity<1){
 		await removeFromCart(itemId)
		  return;
	  }
  	try{
		await fetch(`${BASE_URL}/api/cart/update/`, {
			method: "POST",
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify({item_id:itemId, quantity}),
		})

		fetchCart();
	}catch(error){
		console.log('error is', error)
	}
  };

async function fetchCart(){
	try{
		const response = await axios.get(`${BASE_URL}/api/cart`)
		console.log('fetch cart is', response);
		console.log('items are', response.data.items);
		console.log('cart is', cartItems);
		setCartItems(response.data.items);
		setTotal(response.data.total || 0);
	}catch(error){
		console.log("error from fetch is", error)
	}
}

useEffect(()=>{
	fetchCart()
}, [])

	

  return (
    <CartContext.Provider
      value={{ cartItems,total, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
