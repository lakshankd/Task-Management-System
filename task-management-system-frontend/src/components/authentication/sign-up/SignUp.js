import React, { useState } from "react";
import styles from "./signup.module.css";

export default function SignUp(props) {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className={styles.sign_up_container}>
      <h1>Create an account</h1>
      <div className={styles.sign_up_container_inputs}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </div>
      <button>Register</button>
      <p
        className={styles.sign_up_container_link}
        onClick={props.navigateToSignIn}
      >
        Already have an account? Sign In
      </p>
    </div>
  );
}
