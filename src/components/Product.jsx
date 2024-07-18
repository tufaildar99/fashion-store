import React from "react";
import styles from "../styles/Product.module.css";

const Product = ({ src, brand, price, title, oldPrice }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={src} alt="test-img" />
      </div>
      <div className={styles.productDetails}>
        <h2>{title}</h2>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.price}>
          <h3>Rs {price}</h3>
          <span className={styles.strikenSpan}>
            <h2 className={styles.strikenPrice}>Rs {oldPrice}</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

export { Product };
