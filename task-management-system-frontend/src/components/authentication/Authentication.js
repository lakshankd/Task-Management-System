import React, { useState } from "react";
import styles from "./authentication.module.css";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import signInImg from "../../assets/auth/sign-in.jpg";
import signUpImg from "../../assets/auth/sign-up.jpg";

export default function Authentication() {
  const [isSignIn, setIsSignIn] = useState(true);

  function navigateSignInSignUp() {
    setIsSignIn((state) => !state);
  }

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_container_left}>
        {isSignIn ? (
          <SignIn navigateToSignUp={navigateSignInSignUp} />
        ) : (
          <img src={signUpImg} alt="sign-up img" />
        )}
      </div>
      <div className={styles.auth_container_right}>
        {!isSignIn ? (
          <SignUp navigateToSignIn={navigateSignInSignUp} />
        ) : (
          <img src={signInImg} alt="sign-in img" />
        )}
      </div>
    </div>
  );
}
