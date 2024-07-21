import React from "react";
import styles from "@/styles/loading.module.css";

function loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div class={styles.loader}>
        <span class={styles.loader_text}>loading</span>
        <span class={styles.load}></span>
      </div>
    </div>
  );
}

export default loading;
