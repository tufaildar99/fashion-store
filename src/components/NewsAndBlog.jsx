import React from "react";
import { Text } from "../components/Text";
import { Blog } from "../components/Blog";
import styles from "../styles/NewsAndBlog.module.css";

const NewsAndBlog = () => {
  return (
    <div className={styles.main}>
      <div className={styles.newsAndBlog}>
        <div className={styles.sectionHeading}>
          <Text as={"h2"}>Our Latest News and Blogs</Text>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.blogCard}>
            <Blog
              src={"images/blog.jpg"}
              date={"July 16 2024"}
              title={"Trendy Fashion"}
              description={
                "Trendy fashion represents the latest, most popular styles and trends, constantly evolving to reflect current tastes and preferences."
              }
            />
          </div>
          <div className={styles.blogCard}>
            <Blog
              src={"images/blog.jpg"}
              date={"July 16 2024"}
              title={"Trendy Fashion"}
              description={
                "Trendy fashion represents the latest, most popular styles and trends, constantly evolving to reflect current tastes and preferences."
              }
            />
          </div>
          <div className={styles.blogCard}>
            <Blog
              src={"images/blog.jpg"}
              date={"July 16 2024"}
              title={"Trendy Fashion"}
              description={
                "Trendy fashion represents the latest, most popular styles and trends, constantly evolving to reflect current tastes and preferences."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsAndBlog };
