import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar prod al carrito
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

  // eliminar productos
  const removeItem = (_id) => {
    setCart(cart.filter((prod) => prod._id !== _id));
  };

  // contador cantidad de productos en el carrito
  const qtyInCart = () => {
    return cart.reduce((acc, prod) => acc + prod.qty, 0);
    //return cart.length;
  };

  // muestra el total por producto
  const prodTotalAmount = (qty, price) => {
    return qty * price;
  };

  // total de todos los productos comprados
  const totalBuyAmount = () => {
    // const array = [];
    // let suma = 0;
    
    // for (let n = 0; n < cart.length; n++) {
    //   const element = cart[n].qty * cart[n].price;
    //   array.push(element);
    // }

    // array.forEach(function (valor) {
    //   suma += valor;
    // });
    // return suma;
    const total = cart.reduce((acc, producto) =>acc + producto.price * producto.qty, 0);
    return total
  };

  // vaciar carrito
  const clear = () => {
    setCart([]);
  };

  // identifica si el producto está en el carrito 
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
