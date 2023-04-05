// Importing necessary modules
import React from "react";
import { File } from "../assets/svg-icons";
import styles from "../styles.module.css";

const FileFormatter = ({ data }) => {
  return (
    <div className={styles.fileWrapper}>
      {Object.keys(data.files).map((file) => {
        return (
          <div className={styles.fileDiv}>
            <File className={styles.icon} />
            <a
              href={data.files[file].raw_url} // Setting the URL for the file link
              target="_blank" // Setting the link to open in a new tab
              rel="noreferrer"
              className={styles.fileLink} // Adding a class to the file link
            >
              {file}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default FileFormatter;
