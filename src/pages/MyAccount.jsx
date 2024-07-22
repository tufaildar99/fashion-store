import React, { useState } from "react";
import styles from "../styles/MyAccount.module.css";
import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { PersonalInfo } from "../components/PersonalInfo";
import { MyOrders } from "../components/MyOrders";

const MyAccount = () => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.leftColomn}>
          <div className={styles.tabsVertical}>
            <button>Personal Information</button>
            <button>My Orders</button>
            <button>Manage Address</button>
            <button>Password Manager</button>
          </div>
          <div className={styles.logoutDiv}>
            <button>Logout</button>
          </div>
        </div>
        {flag ? <PersonalInfo /> : <MyOrders />}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export { MyAccount };
