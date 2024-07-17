import React from "react";
import { Text } from "../components/Text";
import { Img } from "../components/Img";
import styles from "../styles/Blog.module.css";

const Blog = ({ src, date, title, description }) => {
  return (
    <div className={styles.blogItemContainer}>
      <Img src={src} className={styles.blogImage} />
      <div className={styles.blogContent}>
        <Text as={"h4"} className={styles.date}>
          {date}
        </Text>
        <div className={styles.description}>
          <Text as={"h2"} className={styles.title}>
            {title}
          </Text>
          <Text as={"p"} className={styles.description}>
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
};

export { Blog };
