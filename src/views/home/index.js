import React from "react";
import { Redirect } from "react-router-dom";
import storage from "../../common/api/storage";
import Navbar from "../../components/navbar";
import classes from "./style.module.css";
import { useSelector } from "react-redux";
function Home() {
  const token = storage.get("token");
  const { isAuthenticated, user } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Navbar />
      <div className={classes.mainCnt}>
        <h1>Welcome To</h1>
        <h2>Trusted Messaging Company</h2>
      </div>
    </>
  );
}

export default Home;
