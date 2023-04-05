import React from "react";
import Avatar from "./Avatar";
import Links from "./Links";
import styles from "../styles.module.css";
import DateFormatter from "./DateFormatter";
import FileFormatter from "./FileFormatter";

const Gist = ({ data }) => {
  return (
    <div>
      <div className={styles.avatarContainer}>
        <Avatar data={data} />
        <Links data={data} />
      </div>
      <div className={styles.dateContainer}>
        <DateFormatter data={data} />
      </div>
      <div className={styles.descriptionContainer}>{data.description}</div>
      <div className={styles.fileContainer}>
        <FileFormatter data={data} />
      </div>
      <div className={styles.separator}></div>
    </div>
  );
};

export default Gist;
