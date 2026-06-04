import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateOrderPage from "../pages/CreateOrderPage";
import PaymentPage from "../pages/PaymentPage";
import OrdersPage from "../pages/OrdersPage";
function PageContent() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:category/:subcategory" element={<ShopPage />} />
      <Route path="/shop/:category/:subcategory/:productName/:productId" element={<ProductDetailPage />} />
      <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-order" element={<ProtectedRoute><CreateOrderPage /></ProtectedRoute>}/>
      <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>}/>
      <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
    </Routes>
  );
}

export default PageContent;