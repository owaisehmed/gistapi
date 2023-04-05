import React from "react";
import { Code, Comment, Fork, Star } from "../assets/svg-icons";
import styles from "../styles.module.css";
import { totalFiles } from "../utils/index";

const Links = ({ data }) => {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.iconDiv}>
        <Code className={styles.icon} />
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className={styles.links}
        >
          {totalFiles(data.files)} Files
        </a>
      </div>
      <div className={styles.iconDiv}>
        <Fork className={styles.icon} />
        <a
          href={data.forks_url}
          target="_blank"
          rel="noreferrer"
          className={styles.links}
        >
          Forks
        </a>
      </div>
      <div className={styles.iconDiv}>
        <Comment className={styles.iconSmall} />
        <a
          href={data.comments_url}
          target="_blank"
          rel="noreferrer"
          className={styles.links}
        >
          Comments
        </a>
      </div>
      <div className={styles.iconDiv}>
        <Star className={styles.iconSmall} />
        <a
          href={data.owner.starred_url}
          target="_blank"
          rel="noreferrer"
          className={styles.links}
        >
          Stars
        </a>
      </div>
    </div>
  );
};

export default Links;
