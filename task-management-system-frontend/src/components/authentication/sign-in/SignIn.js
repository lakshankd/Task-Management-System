import React, { useState } from "react";
import styles from "./signin.module.css";

export default function SignIn() {
  const [user, setUser] = useState({
    emial: "",
    password: "",
  });

  return (
    <div className={styles.sign_in_container}>
      <h1>Welcome Back</h1>
      <p>Welcome back! Please enter your details.</p>
      <div className={styles.sign_in_container_inputs}>
        <input type="text" value={user.emial} placeholder="Email" />
        <input type="password" value={user.password} placeholder="Password" />
      </div>
      <button>Login</button>
    </div>
  );
}
