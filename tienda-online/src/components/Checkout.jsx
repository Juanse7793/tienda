import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, placeOrder } = useCart();
  const navigate = useNavigate();
  const { username } = useParams();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    placeOrder();
    setOrderPlaced(true);
    setTimeout(() => {
      navigate(`/user/${username}/orders`);
    }, 2000); // Redirigir después de 2 segundos
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">¡Gracias por tu compra!</h1>
        <p className="text-lg mb-4">Tu orden ha sido procesada con éxito.</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="text-lg mb-4">
          No puedes proceder al pago con un carrito vacío.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="mb-4">Por favor, confirma tu orden.</p>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-lg shadow"
          >
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm">Cantidad: {item.quantity}</p>
            </div>
            <p className="text-lg font-bold">${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default Checkout;
