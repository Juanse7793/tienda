import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import usersData from "../data/users.json";
import UserNotFound from "./UserNotFound";
import PropTypes from "prop-types";

const UserDetail = ({ setAuthenticatedUser }) => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = usersData.find((user) => user.username === username);
    setUser(foundUser);
    if (foundUser) {
      setAuthenticatedUser(username);
    }
  }, [username, setAuthenticatedUser]);

  if (!user) {
    return <UserNotFound />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{user.name}</h1>
        <p className="text-lg mb-4">{user.description}</p>
        <a
          href={`/user/${username}/products`}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Ver Productos
        </a>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  setAuthenticatedUser: PropTypes.func.isRequired,
};

export default UserDetail;
