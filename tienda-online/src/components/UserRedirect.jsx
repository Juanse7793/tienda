import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../data/users.json";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Buscar Usuario</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Introduce el nombre de usuario"
          className="border p-2 rounded mb-4"
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

export default UserRedirect;
