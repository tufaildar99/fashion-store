import React from "react";
import { ProductDetailsOne } from "../components/ProductDetailsOne";
import { Header } from "../components/Header";
import { ProductDetailsTwo } from "../components/ProductDetailsTwo";
import { SimiliarProducts } from "../components/SimiliarProducts";
import { Features } from "../components/Features";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <ProductDetailsOne />
      <ProductDetailsTwo />
      <SimiliarProducts />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export { ProductDetails };
