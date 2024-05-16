import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import { useCart } from "../context/CartContext";
import Alert from "./Alert";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  const { id, username } = useParams();
  const navigate = useNavigate();
  const { addToCart, message } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = productsData.find((p) => p.id === parseInt(id));
    setProduct(product);
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="max-w-lg mx-auto p-4">
      {message && <Alert message={message} />}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Añadir al Carrito
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white py-2 px-4 rounded flex items-center"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Atrás
      </button>
    </div>
  );
};

export default ProductDetail;
