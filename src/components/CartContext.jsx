import { createContext, useState,useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    const totalItems = cart.reduce((ac,cu)=>ac+=cu.quantity,0);
  useEffect(()=>{
    console.log(cart)
  },[cart])
  const addToCart = (item) => {
    const existingItem = cart.find((i) => i.name === item.name);
    if (existingItem) {
      setCart(
        cart.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity += 1 } : i))
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCart((prevCart) =>
    prevCart.map((data) => {
      if (data.name === item.name) {
        return { ...data, quantity: data.quantity - 1 };
      }
      return data;
    }).filter((data) => data.quantity > 0)
  );
  };


  const updateQuantity = (itemId, quantity) => {
    setCart(
      cart.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    );
  };

  return (
    <CartContext.Provider value={{ cart,totalItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };