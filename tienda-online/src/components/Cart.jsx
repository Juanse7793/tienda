import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { username } = useParams();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
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
      )}
      <div className="mt-4 text-right">
        <p className="text-xl font-bold">Total: ${totalPrice}</p>
        {cartItems.length > 0 && (
          <button
            onClick={() => navigate(`/user/${username}/checkout`)}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          >
            Proceder al Pago
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
