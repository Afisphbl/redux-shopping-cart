import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import CartPage from "../pages/CartPage/CartPage";

const Home = lazy(() => import("../pages/Home/Home"));
const ProductDetail = lazy(
  () => import("../pages/ProductDetail/ProductDetail"),
);
const Cart = lazy(() => import("../pages/CartPage/CartPage"));

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
};
