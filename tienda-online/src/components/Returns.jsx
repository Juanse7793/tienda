import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Returns = () => {
  const { username } = useParams();
  const { returns } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Devoluciones</h1>
      {returns.length === 0 ? (
        <p>No has realizado ninguna devolución.</p>
      ) : (
        <ul className="space-y-4">
          {returns.map((order) => (
            <li key={order.id} className="border p-4 rounded-lg shadow">
              <div className="mb-2">
                <h2 className="text-lg font-semibold">Orden #{order.id}</h2>
                <p className="text-sm">Fecha: {order.date}</p>
                <p className="text-sm text-red-500">Estado: DEVUELTA</p>
              </div>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>{item.name}</div>
                    <div>
                      {item.quantity} x ${item.price}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-2 text-right">
                <p className="text-lg font-bold">Total: ${order.total}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold">
                  Razón de la Devolución:
                </h3>
                <p>{order.returnReason}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Returns;
