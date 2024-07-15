import React from "react";
import styles from "../styles/Newsletter.module.css";
import { Text } from "./Text";
import { Input } from "./Input";
import { Button } from "./Button";
import { Img } from "./Img";
import "../styles/Newsletter.module.css";

const Newsletter = () => {
  return (
    <div>
      <div className={styles["main"]}>
        <div className={styles["main-content"]}>
          <Text as={"h3"} className={styles["text-title"]}>
            Our Newsletter
          </Text>
          <Text as={"h1"} className={styles["main-text"]}>
            Subscribe to our Newsletter for updates on our latest collection
          </Text>

          <div type={"email"} className={styles["input-field"]}>
            <Input placeholder={"Enter your email address"} />
            <Button type={"submit"} className={styles["subscribe-btn"]}>
              Subscribe Now
            </Button>
          </div>
        </div>
        <div className="image">
          <Img src={"images/newsletter1.png"} className={"newsletter-img"} />
        </div>
      </div>
    </div>
  );
};
export { Newsletter };
