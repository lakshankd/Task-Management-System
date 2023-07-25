import React, { useState } from "react";
import styles from "./signin.module.css";
import { Link } from "react-router-dom";

export default function SignIn(props) {
  const [user, setUser] = useState({
    emial: "",
    password: "",
  });

  return (
    <div className={styles.sign_in_container}>
      <h1>Welcome Back</h1>
      <p>Welcome back! Please enter your details.</p>
      <form className={styles.sign_in_container_inputs}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div>
          <input type="checkbox" id="remeber_me" />
          <label htmlFor="remeber_me">Remember Me</label>
        </div>
        <Link to="#page">Forgot password?</Link>
      </form>
      <button>Login</button>
      <p
        className={styles.sign_in_container_link}
        onClick={props.navigateToSignUp}
      >
        Don't have an account? Sign Up
      </p>
    </div>
  );
}
