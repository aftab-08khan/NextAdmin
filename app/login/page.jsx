import React from "react";
import styles from "@/app/ui/login/login.module.css";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="UserName"></input>
        <input type="password" placeholder="Password"></input>
      </form>
    </div>
  );
};

export default LoginPage;
