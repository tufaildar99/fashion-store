import React from "react";
import styles from "../styles/Checkout.module.css";
import { PriceDetails } from "../components/PriceDetails";
import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const Checkout = () => {
  return (
    <>
      <Header />
      <div className={styles.checkoutContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.heading}>
            <h2>Payment Option</h2>
          </div>
          <div className={styles.paymentOptions}>
            <div className={styles.paymentOption}>
              <input type="radio" name="payment" />
              <label>UPI</label>
            </div>
            <div className={styles.paymentOption}>
              <input type="radio" name="payment" />
              <label>Net Banking</label>
            </div>
            <div className={styles.paymentOption}>
              <input type="radio" name="payment" />
              <label>Cash On Delivery</label>
            </div>
          </div>
        </div>
        <PriceDetails />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export { Checkout };
