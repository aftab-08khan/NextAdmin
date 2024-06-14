import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import productImg from "../../../public/noproduct.jpg";
import styles from "@/app/ui/dashboard/products/products.module.css";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search a Products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title </td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src={productImg}
                  alt="AvatarImg"
                  width={40}
                  height={40}
                  className={styles.productImg}
                />
                IPhone
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>13.02.2024</td>
            <td>76</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
