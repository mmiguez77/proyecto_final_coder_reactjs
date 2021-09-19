import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (prod) => {
    if (cart.some((item) => item._id === prod._id)) {
      let updateItem = cart.map((i) => {
        let newQty = i.qty + prod.qty;
        if (i._id === prod._id) {
          return {
            ...i,
            qty: newQty,
          };
        }
        return updateItem;
      });
      setCart(updateItem);
    } else {
      setCart([...cart, prod]);
    }
  };

  const removeItem = (_id) => {
    setCart(cart.filter((prod) => prod._id !== _id));
  };

  const qtyInCart = () => {
    return cart.reduce((acc, prod) => acc + prod.qty, 0);
  };

  const prodTotalAmount = (qty, price) => {
    return qty * price;
  };

  const totalBuyAmount = () => {
    const total = cart.reduce((acc, producto) =>acc + producto.price * producto.qty, 0);
    return total
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (_id) => {
    return cart.some((elem) => elem._id === _id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
        isInCart,
        qtyInCart,
        prodTotalAmount,
        totalBuyAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
