import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/shop" element={<ShopPage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          <Route path="/product/:id" element={<ProductPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}






        </Routes>
      </BrowserRouter>
  );
}

export default App;