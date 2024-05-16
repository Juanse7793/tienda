import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import UserNotFound from "./components/UserNotFound";
import UserRedirect from "./components/UserRedirect";
import UserDetail from "./components/UserDetail";
import Company from "./components/Company";
import About from "./components/About";
import Orders from "./components/Orders";
import Returns from "./components/Returns";
import { useCart } from "./context/CartContext";
import Alert from "./components/Alert";

const App = () => {
  const { message } = useCart();
  const location = useLocation();
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const showNavbar =
    authenticatedUser &&
    location.pathname.startsWith(`/user/${authenticatedUser}`);

  return (
    <div className="flex flex-col min-h-screen relative">
      {showNavbar && <Navbar username={authenticatedUser} />}
      <main className="flex-grow container mx-auto p-4 relative">
        {message && <Alert message={message} />}
        <Routes>
          <Route
            path="/"
            element={
              <UserRedirect setAuthenticatedUser={setAuthenticatedUser} />
            }
          />
          <Route
            path="/user/:username"
            element={<UserDetail setAuthenticatedUser={setAuthenticatedUser} />}
          />
          <Route path="/user/:username/products" element={<ProductList />} />
          <Route
            path="/user/:username/product/:id"
            element={<ProductDetail />}
          />
          <Route path="/user/:username/cart" element={<Cart />} />
          <Route path="/user/:username/checkout" element={<Checkout />} />
          <Route path="/user/:username/orders" element={<Orders />} />
          <Route path="/user/:username/returns" element={<Returns />} />
          <Route path="/user/:username/company" element={<Company />} />
          <Route path="/user/:username/about" element={<About />} />
          <Route path="/user/notfound" element={<UserNotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showNavbar && <Footer />}
    </div>
  );
};

export default App;
