import React from "react";
import styles from "../styles/Filter.module.css";

const items = ["Zara", "Nike", "Adidas", "Puma"];

const Filter = ({ name }) => {
  return (
    <div className={styles.filterBox}>
      <div className={styles.checklistName}>
        {name}
        <span>
          <i class="fa-solid fa-caret-down"></i>
        </span>
      </div>
      <ul className={styles.listContainer}>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            <label>{item}</label>
          </li>
        ))}
      </ul>
      <a className={styles.link} href="#">
        See all
      </a>
    </div>
  );
};

export { Filter };
