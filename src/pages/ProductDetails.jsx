import React from "react";
import { ProductDetailsOne } from "../components/ProductDetailsOne";
import { Header } from "../components/Header";
import { ProductDetailsTwo } from "../components/ProductDetailsTwo";
import { SimiliarProducts } from "../components/SimiliarProducts";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <ProductDetailsOne />
      <ProductDetailsTwo />
      <SimiliarProducts />
    </div>
  );
};

export { ProductDetails };
