import React from "react";
import styles from "../styles/MyAccountPersonal.module.css";
import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const MyAccountPersonal = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.leftColomn}>
          <div className={styles.tabsVertical}>
            <button>Personal Information</button>
            <button>My Orders</button>
            <button>Manage Address</button>
            <button>Payment Method</button>
            <button>Password Manager</button>
          </div>
          <div className={styles.logoutDiv}>
            <button>Logout</button>
          </div>
        </div>
        <div className={styles.formDiv}>
          <form>
            <label>First Name</label>
            <input type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Phone</label>
            <input type="number" />
            <label>Gender</label>
            <select>
              <option name="male" value="male">
                Male
              </option>
              <option name="female" value="female">
                Female
              </option>
              <option name="other" value="other">
                Other
              </option>
            </select>
            <button>Update</button>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export { MyAccountPersonal };
