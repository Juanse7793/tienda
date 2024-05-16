import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const Navbar = ({ username }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to={`/user/${username}/products`} className="text-lg font-bold">
          JuanseStore
        </Link>
        <div className="flex space-x-4">
          <Link
            to={`/user/${username}/products`}
            className="text-gray-700 hover:text-blue-500"
          >
            Productos
          </Link>
          <Link
            to={`/user/${username}/company`}
            className="text-gray-700 hover:text-blue-500"
          >
            Empresa
          </Link>
          <Link
            to={`/user/${username}/about`}
            className="text-gray-700 hover:text-blue-500"
          >
            Sobre mí
          </Link>
          <Link
            to={`/user/${username}/orders`}
            className="text-gray-700 hover:text-blue-500"
          >
            Mis Compras
          </Link>
          <Link
            to={`/user/${username}/returns`}
            className="text-gray-700 hover:text-blue-500"
          >
            Devoluciones
          </Link>
        </div>
        <Link
          to={`/user/${username}/cart`}
          className="text-gray-700 hover:text-blue-500 flex items-center"
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Navbar;
