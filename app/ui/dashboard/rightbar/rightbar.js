import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import astronautImg from "../../../../public/astronaut.png";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src={astronautImg}
            alt="astronaut-Img"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notify}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use new version of admin dashboard ?
          </h3>
          <span className={styles.subtitle}>Takes 4min to Learn </span>
          <p className={styles.desc}>
            Lorem Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        {/* <div className={styles.bgContainer}>
          <Image src={astronautImg} alt="astronaut-Img" fill />
        </div> */}
        <div className={styles.texts}>
          <span className={styles.notify}>🔥 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre- rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
