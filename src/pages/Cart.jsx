import React from "react";
import styles from "../styles/Cart.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CartProduct } from "../components/CartProduct"; // Ensure you import CartProduct
import { SimiliarProducts } from "../components/SimiliarProducts";
import { PriceDetails } from "../components/PriceDetails";

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
        <PriceDetails />
      </div>
      <SimiliarProducts />
      <Footer />
    </>
  );
};

export { Cart };
