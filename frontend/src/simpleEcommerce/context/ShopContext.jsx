import { createContext, useContext, useState } from "react";
import { PRODUCTS } from "../../products";

export const ShopContext = createContext(null);
// export const useShopContext = () => useContext(useShopContext);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFrmCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removeFrmCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
