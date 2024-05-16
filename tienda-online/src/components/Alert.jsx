import PropTypes from "prop-types";

const Alert = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg z-50"
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
};

export default Alert;
