// Footer.js

import React from "react";
import styles from "../styles/Footer.module.css"; // Importing the CSS module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-links"]}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-contact"]}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className={styles["footer-social"]}>
          <h3>Follow Us</h3>
          <div className={styles["social-icons"]}>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <p>&copy; 2024 Flash Flash. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
