import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../data/users.json";
import PropTypes from "prop-types";

const UserRedirect = ({ setAuthenticatedUser }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRedirect = () => {
    const userExists = usersData.some((user) => user.username === username);
    if (userExists) {
      setAuthenticatedUser(username);
      navigate(`/user/${username}/products`);
    } else {
      navigate("/user/notfound");
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-store-bg bg-cover bg-center flex items-center justify-center">
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-4">Buscar Usuario</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Introduce el nombre de usuario"
          className="border p-2 rounded mb-4 w-80 mr-4"
        />
        <button
          onClick={handleRedirect}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

UserRedirect.propTypes = {
  setAuthenticatedUser: PropTypes.func.isRequired,
};

export default UserRedirect;
