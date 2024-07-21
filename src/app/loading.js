import React from "react";
import styles from "@/styles/loading.module.css";

function loading() {
  return (
    <div class={styles.three_body}>
      <div class={styles.three_body__dot}></div>
      <div class={styles.three_body__dot}></div>
      <div class={styles.three_body__dot}></div>
    </div>
  );
}

export default loading;
