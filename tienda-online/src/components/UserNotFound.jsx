import { Link } from "react-router-dom";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const UserNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <ExclamationCircleIcon className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Usuario no encontrado</h1>
        <p className="text-lg my-12">
          Lo sentimos, el usuario que estás buscando no existe.
        </p>
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded">
          Ir al Usuario Principal
        </Link>
      </div>
    </div>
  );
};

export default UserNotFound;
