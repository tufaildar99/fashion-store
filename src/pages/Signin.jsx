import React from "react";
import { Img } from "../components/Img";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styles from "../styles/Signin.module.css";

const Signin = () => {
  return (
    <div className={styles.container_main}>
      <div className={styles.login_container}>
        <div className={styles.left_column}>
          <div className={styles.login_form_container}>
            <Img
              src={"images/logo.png"}
              alt="Logo"
              className={styles.logo_img}
            />
            <div className={styles.signin_container}>
              <Text as={"h3"} className={styles.heading}>
                Sign in to your account
              </Text>
              <div className={styles.credentials_container}>
                <div className={styles.email_container}>
                  <Text as={"h4"} className={styles.email_text}>
                    Email Address
                  </Text>
                  <Input
                    type={"email"}
                    placeholder={"Email Address"}
                    className={styles.mail_input}
                  />
                </div>
                <div className={styles.password_wrap}>
                  <div className={styles.password_container}>
                    <Text as={"h4"} className={styles.email_text}>
                      Password
                    </Text>
                    <Input
                      type={"password"}
                      placeholder={"Password"}
                      className={styles.mail_input}
                    />
                  </div>
                  <a href="#">Forgot Password</a>
                </div>
              </div>
              <Button className={styles.signin_btn} type={"submit"}>
                Sign In
              </Button>
              <div>
                <a href="#">Don't have an account? Sign Up</a>
              </div>
            </div>
            <hr />
            <div>
              <a href="#">Terms & conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className={styles.right_column}>
          <Img
            src={"images/signin.jpg"}
            className={styles.sign_in_img}
            alt={"Sign In Image"}
          />
        </div>
      </div>
    </div>
  );
};

export { Signin };
