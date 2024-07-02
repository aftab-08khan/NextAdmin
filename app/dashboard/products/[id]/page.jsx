"use client";
import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { StyleRegistry } from "styled-jsx";
import Image from "next/image";
import AvatarImg from "../../../../public/noavatar.png";
const singleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={AvatarImg} alt="AvatarImg" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input name="id" placeholder="JOhn" />
          <label>Price</label>
          <input type="number" name="Price" placeholder="username" />
          <label>Stock</label>
          <input type="number" name="Stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="Color" placeholder="red" />

          <label>Address</label>
          <textarea type="text" name="Size" placeholder="New York" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kicten">Kicten</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          ></textarea>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default singleProductPage;
