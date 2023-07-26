import React from "react";
import "./Component/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layaout from "./Component/layaout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import TrimAndCondations from "./pages/TrimAndCondations";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layaout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<OurStore />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/content" element={<Contact />} />
            <Route path="/compare-products" element={<CompareProducts />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route path="/term-and-condations" element={<TrimAndCondations />}></Route>
            <Route path="/shipping-policy" element={<ShippingPolicy />}></Route>
            <Route path="/refund-policy" element={<RefundPolicy />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
