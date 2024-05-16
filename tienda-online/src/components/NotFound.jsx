import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <p className="text-lg my-12">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">
          Ir a la Página Principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
