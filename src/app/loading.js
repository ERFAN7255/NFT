import React from "react";
import styles from "@/styles/loading.module.css";

function loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className={styles.loader}>
        <span className={styles.loader_text}>loading</span>
        <span className={styles.load}></span>
      </div>
    </div>
  );
}

export default loading;
