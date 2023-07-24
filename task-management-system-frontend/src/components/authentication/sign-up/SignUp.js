import React, { useState } from "react";
import styles from "./signup.module.css";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className={styles.sign_up_container}>
      <h1>Create an accouunt</h1>
      <div className={styles.sign_up_container_inputs}>
        <input type="text" value={newUser.firstName} placeholder="First Name" />
        <input type="text" value={newUser.lastName} placeholder="Last Name" />
        <input type="email" value={newUser.email} placeholder="Email" />
        <input
          type="password"
          value={newUser.password}
          placeholder="Password"
        />
        <input
          type="password"
          value={newUser.confirmPassword}
          placeholder="Confirm Password"
        />
      </div>
      <button>Register</button>
    </div>
  );
}
