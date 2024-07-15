import React from "react";
import { Img } from "../components/Img";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styles from "../styles/signup.module.css";

const Signup = () => {
  return (
    <div className={styles.main}>
      <div className={styles["left-col"]}>
        <div className={styles["form-container"]}>
          <Img
            src={"images/logo.png"}
            alt={"Logo"}
            className={styles["logo-img"]}
          />
          <div className={styles["form-content"]}>
            <Text as={"h3"} className={styles.heading}>
              Sign up to your account
            </Text>
            <div className={styles["form-fields"]}>
              <div className={styles["first-field"]}>
                <div className={styles.firstname}>
                  <Text as={"h4"} className={styles["input-label"]}>
                    First Name
                  </Text>
                  <Input
                    type={"text"}
                    className={styles["input-field"]}
                    placeholder={"First name"}
                  />
                </div>
                <div className={styles.secondname}>
                  <Text as={"h4"} className={styles["input-label"]}>
                    Second Name
                  </Text>
                  <Input
                    type={"text"}
                    className={styles["input-field"]}
                    placeholder={"Second name"}
                  />
                </div>
              </div>
              <div className={styles["second-field"]}>
                <Text as={"h4"} className={styles["input-label"]}>
                  Email Address
                </Text>
                <Input
                  type={"email"}
                  className={styles["input-field"]}
                  placeholder={"Email Address"}
                />
              </div>
              <div className={styles["third-field"]}>
                <Text className={styles["input-label"]} as={"h4"}>
                  Password
                </Text>
                <Input
                  type={"password"}
                  className={styles["input-field"]}
                  placeholder={"Password"}
                />
              </div>
              <div className={styles["checkbox-container"]}>
                <input type="checkbox" />
                <label>I agree to the terms and conditions</label>
              </div>
              <Button type={"submit"} className={styles["sign-up-btn"]}>
                Sign Up
              </Button>
              <div className={styles["sign-in-link"]}>
                <Text as={"p"} className={styles["sign-in-link-label"]}>
                  Already have an account
                </Text>
                <a href="#">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["right-col"]}>
        <Img
          src={"images/signin.jpg"}
          alt={"Sign Up Image"}
          className={styles["sign-up-img"]}
        />
      </div>
    </div>
  );
};

export { Signup };
