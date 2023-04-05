// Importing necessary modules
import React, { useEffect, useState } from "react";
import Gist from "./Gist";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux"; // Importing Redux hooks
import { getUserList } from "../redux/userActions"; // Importing a Redux action

const GistList = () => {
  const { users, status } = useSelector((state) => state.users); // Retrieving data from the Redux store using the "useSelector" hook
  const dispatch = useDispatch(); // Creating a dispatch function using the "useDispatch" hook

  useEffect(() => {
    // Using the "useEffect" hook to fetch data from the API when the component mounts
    dispatch(getUserList()); // Dispatching a Redux action to fetch user data
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.boxWrapper}>
        {/* Rendering a message while data is being fetched from the API */}
        {status == "pending" && <div>Loading...</div>}{" "}
        {users.map((data) => {
          return <Gist data={data} />; // Rendering a "Gist" component for each user
        })}
        {status == "failed" && <div>No Records Found!</div>}
      </div>
    </div>
  );
};

export default GistList;
