import React from "react";
import styles from "../styles/Filter.module.css";

const Filter = ({ item }) => {
  return (
    <div className={styles.filterBox}>
      <div className={styles.checklistName}>
        {item.name}
        <span>
          <i class="fa-solid fa-caret-down"></i>
        </span>
      </div>
      <ul className={styles.listContainer}>
        {item.labels.map((label, index) => (
          <li key={index}>
            <input type="checkbox" />
            <label>{label}</label>
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
