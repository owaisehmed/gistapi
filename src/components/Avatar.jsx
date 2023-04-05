import React from "react";
import styles from "../styles.module.css";

const Avatar = ({ data }) => {
  return (
    <div className={styles.avatarWrapper}>
      <img src={data.owner.avatar_url} className={styles.avatar} alt="" />
      <a
        href={data.owner.url}
        target="_blank"
        rel="noreferrer"
        className={styles.links}
      >
        {data.owner.login}
      </a>
    </div>
  );
};

export default Avatar;
