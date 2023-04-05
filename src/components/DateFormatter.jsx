import React from "react";
import { dateFormatter } from "../utils";
import styles from "../styles.module.css";

const DateFormatter = ({ data }) => {
  return (
    <div className={styles.dateWrapper}>
      <div>Created at: {dateFormatter(data.created_at)}</div>
      <div>Last updated: {dateFormatter(data.updated_at)}</div>
    </div>
  );
};

export default DateFormatter;
