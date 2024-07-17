import React from "react";
import styles from "../styles/Faq.module.css";
import { Text } from "../components/Text";
import { FaqCard } from "./FaqCard.jsx";

const Faq = () => {
  return (
    <div className={styles.faqSection}>
      <div className={styles.faqMain}>
        <div className={styles.faqHeading}>
          <Text as={"h2"}>Have Queries ? Refer Here</Text>
        </div>

        <ul className={styles.faqcardList}>
          <li>
            <FaqCard />
          </li>
          <li>
            <FaqCard />
          </li>
          <li>
            <FaqCard />
          </li>
          <li>
            <FaqCard />
          </li>
          <li>
            <FaqCard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Faq };
