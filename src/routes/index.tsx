import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import NewProduct from "../components/Products/NewProduct";
import AllProducts from "../components/Products/AllProducts";
import Initial from "../components/Initial";

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
          <Route path="orders" element={<h1>Orders</h1>} />
          <Route path="users" element={<h1>Users</h1>} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
