import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Views/Products/allProducts";
import { ShowProduct } from "../Views/Products/showProduct";
import { EditProduct } from "../Views/Products/editProduct";
import { AddProduct } from "../Views/Products/addProduct";
import NotFoundPage from "../Views/Error/error404";

const Router = () => (
  <Routes>
    <Route path="/" element={<Products />} />
    <Route path="products/:id" element={<ShowProduct />} />
    <Route path="products/edit/:id" element={<EditProduct />} />
    <Route path="products/new" element={<AddProduct />} />
    <Route path="*" element={<NotFoundPage />} />

    {/*<Route path="*" element={<Navigate to="/"/>}/>*/}
  </Routes>
);

export default Router;
