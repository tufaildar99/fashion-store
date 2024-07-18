import React from "react";
import styles from "../styles/Pagenum.module.css";

const PageNum = () => {
  return (
    <div className={styles.pageNum}>
      <div className={styles.prev}>
        <a href="#">Previous</a>
      </div>
      <div className={styles.numbering}>
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
      </div>
      <div className={styles.next}>
        <a>Next</a>
      </div>
    </div>
  );
};

export { PageNum };
