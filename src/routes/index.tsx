import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import NewProduct from "../components/Products/NewProduct";
import AllProducts from "../components/Products/AllProducts";
import Initial from "../components/Initial";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route path="/" element={<Initial />} />
        <Route path="new-product" element={<NewProduct />} />
        <Route path="products" element={<AllProducts />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
