import React from "react";
import styles from "../styles/cartProduct.module.css";

const CartProduct = () => {
  return (
    <div className={styles.cartProduct}>
      <div className={styles.productImage}>
        <img src="../images/c1.jpg" alt="Product" />
        <input type="checkbox" className={styles.checkbox} />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productTitle}>
          <h2>Trendy Black T Shirt</h2>
          <button>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className={styles.soldBy}>
          <h2>Sold by: Genus Apparels Ltd</h2>
        </div>
        <div className={styles.sizeandquan}>
          <label>Size</label>
          <select name="size" className={styles.sizeSelection}>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
          <select name="quantity" className={styles.quantitySelection}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className={styles.price}>
          <h3>Rs 588</h3>
        </div>
      </div>
    </div>
  );
};

export { CartProduct };
