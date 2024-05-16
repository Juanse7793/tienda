import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import JuanseLogo from "../assets/images/juanselogo2.png";

const Navbar = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-blue text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to={`/user/${username}/products`} className="text-2xl font-bold">
          <img src={JuanseLogo} alt="Juanse Logo" className="h-10" />
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link
              to={`/user/${username}/products`}
              className="block md:inline-block py-2 px-4"
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${username}/company`}
              className="block md:inline-block py-2 px-4"
            >
              Empresa
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${username}/about`}
              className="block md:inline-block py-2 px-4"
            >
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${username}/orders`}
              className="block md:inline-block py-2 px-4"
            >
              Mis Compras
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${username}/returns`}
              className="block md:inline-block py-2 px-4"
            >
              Devoluciones
            </Link>
          </li>
          <li>
            <Link
              to={`/user/${username}/cart`}
              className="block md:inline-block py-2 px-4"
            >
              <FaShoppingCart size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  username: PropTypes.string,
};

export default Navbar;
