import React from "react";
import styles from "../styles/OrderDetails.module.css";

const OrderDetails = () => {
  return (
    <>
      <div className={styles.main}>
        <p>Arriving Fri , May 24</p>
        <div className={styles.details}>
          <div className={styles.imageonLeft}>
            <img src="./images/order.jpg" />
          </div>
          <div className={styles.detailsRight}>
            <h2>Athleisure Performance Tee</h2>
            <h4>Sold by Genus Apparels</h4>
            <p>Size:XL</p>

            <p>Qty:1</p>

            <button>Track Package</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { OrderDetails };
