import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [returns, setReturns] = useState([]);
  const [message, setMessage] = useState("");

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    showMessage(`Añadido ${product.name} al carrito.`);
  };

  const placeOrder = () => {
    const newOrder = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      status: "En verificación",
      items: cartItems,
      total: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    };

    setOrders([...orders, newOrder]);
    setCartItems([]);

    // Simular actualización del estado de la orden
    setTimeout(() => updateOrderStatus(newOrder.id, "En proceso"), 20000);
    setTimeout(() => updateOrderStatus(newOrder.id, "En delivery"), 30000);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const requestReturn = (orderId, reason) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: "DEVUELTA", returnReason: reason }
          : order
      )
    );
    const returnedOrder = orders.find((order) => order.id === orderId);
    setReturns([...returns, { ...returnedOrder, returnReason: reason }]);
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const value = {
    cartItems,
    orders,
    returns,
    addToCart,
    placeOrder,
    updateOrderStatus,
    requestReturn,
    message,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
