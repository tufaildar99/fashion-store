import React from "react";
import styles from "../styles/MyOrders.module.css";
import { OrderDetails } from "./OrderDetails";

const MyOrders = () => {
  return (
    <>
      <div className={styles.MyOrdersMain}>
        <div className={styles.top}>
          <div className={styles.heading}>
            <h2>My Orders</h2>
          </div>
          <div className={styles.sort}>
            <label>Sort By:</label>
            <select>
              <option name="price" value="price">
                Price
              </option>
              <option name="qty" value="qty">
                Qty
              </option>
              <option name="date" value="date">
                Date
              </option>
            </select>
          </div>
        </div>
        <OrderDetails />
        <OrderDetails />
        <OrderDetails />
        <OrderDetails />
      </div>
    </>
  );
};

export { MyOrders };
