import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";

import DashBoard from "../pages/DashBoard";
import Initial from "../components/Initial";
import NewProduct from "../components/Products/NewProduct";
import AllProducts from "../components/Products/AllProducts";
import SingleProduct from "../components/Products/SingleProduct";
import Orders from "../components/Orders";
import Users from "../components/Users";

import { lightTheme } from "../styles/theme/light";
import { darkTheme } from "../styles/theme/dark";

const Router: React.FC = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route path="/" element={<Initial />} />
          <Route path="new-product" element={<NewProduct />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
