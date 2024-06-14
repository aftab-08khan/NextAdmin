import React from "react";
import styles from "./footer.module.css";
import LogoImg from "../../../../public/Logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.LogoImgBox}>
        <Image src={LogoImg} alt="Logo Img" className={styles.logo} />
      </div>
      <div className={styles.text}>© All Rights Reserved..</div>
    </div>
  );
};

export default Footer;
