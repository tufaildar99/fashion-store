import React from "react";
import styles from "../styles/Cart.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CartProduct } from "../components/CartProduct"; // Ensure you import CartProduct
import { SimiliarProducts } from "../components/SimiliarProducts";

const Cart = () => {
  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.heading}>
            <div className={styles.checkBox}>
              <input type="checkbox" />
              <label>4/4 ITEMS SELECTED</label>
            </div>
          </div>
          <div className={styles.cartComponentsContainer}>
            <CartProduct />
            <CartProduct />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.priceHeading}>
            <h2>Price Details | 2 Items</h2>
          </div>
          <div className={styles.mrpDetailsBox}>
            <div className={styles.totalMRP}>
              <h3>Total MRP</h3>
              <h3>Rs 2598</h3>
            </div>
            <div className={styles.totalMRP}>
              <h3>Discount</h3>
              <h3>-Rs 200</h3>
            </div>
            <div className={styles.totalMRP}>
              <h3>Coupon Discount</h3>
              <h3>-Rs 179</h3>
            </div>
            <div className={styles.totalMRP}>
              <h3>Shipping Fee</h3>
              <h3>Rs 80</h3>
            </div>
          </div>
          <div className={styles.total}>
            <div className={styles.amount}>
              <h3>Total Amount</h3>
              <h3>Rs 1992</h3>
            </div>
            <div className={styles.orderButton}>
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <SimiliarProducts />
      <Footer />
    </>
  );
};

export { Cart };
