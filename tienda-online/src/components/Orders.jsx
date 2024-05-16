import { useState } from "react";
import { useCart } from "../context/CartContext";
import ReturnForm from "./ReturnForm";

const Orders = () => {
  const { orders, requestReturn } = useCart();
  const [showReturnForm, setShowReturnForm] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleReturn = (orderId) => {
    setSelectedOrderId(orderId);
    setShowReturnForm(true);
  };

  const handleReturnSubmit = (reason) => {
    requestReturn(selectedOrderId, reason);
    setShowReturnForm(false);
    setSelectedOrderId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Compras</h1>
      {orders.length === 0 ? (
        <p>No has realizado ninguna compra.</p>
      ) : (
        <ul className="space-y-4">
          {orders
            .sort((a) => (a.status === "DEVUELTA" ? 1 : -1))
            .map((order) => (
              <li key={order.id} className="border p-4 rounded-lg shadow">
                <div className="mb-2">
                  <h2 className="text-lg font-semibold">Orden #{order.id}</h2>
                  <p className="text-sm">Fecha: {order.date}</p>
                  <p
                    className={`text-sm ${
                      order.status === "DEVUELTA" ? "text-red-500" : ""
                    }`}
                  >
                    Estado: {order.status}
                  </p>
                </div>
                <ul className="space-y-2">
                  {order.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
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
                {order.status !== "DEVUELTA" && (
                  <button
                    onClick={() => handleReturn(order.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded mt-4"
                  >
                    Devolver
                  </button>
                )}
              </li>
            ))}
        </ul>
      )}
      {showReturnForm && (
        <ReturnForm
          onSubmit={handleReturnSubmit}
          onCancel={() => setShowReturnForm(false)}
        />
      )}
    </div>
  );
};

export default Orders;
