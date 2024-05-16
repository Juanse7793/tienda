import { Link, useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { username } = useParams();

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-32 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>
      <Link
        to={`/user/${username}/product/${product.id}`}
        className="text-blue-500"
      >
        Ver Detalles
      </Link>
    </div>
  );
};

export default ProductCard;
