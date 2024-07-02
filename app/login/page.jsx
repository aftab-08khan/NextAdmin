import React from "react";
import styles from "@/app/ui/login/login.module.css";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="UserName"></input>
        <input type="password" placeholder="Password"></input>
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
