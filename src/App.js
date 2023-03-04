import React, { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

import Loading from "./component/loading/Loading";

//Sử dụng react lazy để giúp tăng tốc độ tải trang web
const Home = React.lazy(() => import("./pages/Home/Home"));
const ShopPage = React.lazy(() => import("./pages/Shop/ShopPage"));
const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));
const LoginPage = React.lazy(() => import("./pages/Login/LoginPage"));
const DetailPage = React.lazy(() => import("./pages/Detail/DetailPage"));
const RegisterPage = React.lazy(() => import("./pages/Register/RegisterPage"));
const CheckoutPage = React.lazy(() => import("./pages/Checkout/CheckoutPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="Loading">
              <Loading />
            </div>
          }
        >
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route
              path="/cart"
              element={isAuth ? <CartPage /> : <LoginPage />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
