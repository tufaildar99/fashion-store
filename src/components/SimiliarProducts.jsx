import React from "react";
import styles from "../styles/SimiliarProducts.module.css";
import { Product } from "./Product";

const Products = [
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
];

const SimiliarProducts = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h2>Similiar Products</h2>
      </div>
      <div className={styles.product}>
        {Products.map((product, index) => (
          <Product
            key={index}
            src={product.src}
            brand={product.brand}
            price={product.price}
            title={product.title}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export { SimiliarProducts };
