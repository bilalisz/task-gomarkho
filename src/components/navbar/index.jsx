import React from "react";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import classes from "./style.module.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CustomButton from "../custom-button";
import { logoutUser } from "../../Redux/Actions/login.action";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const { firstName, lastName } = user;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = "/login";
  };
  return (
    <nav className={classes.navCnt}>
      <div className={classes.imgCnt}>
        <img src="/images/logo.png" />
      </div>
      <div className={classes.logoutCnt}>
        <Typography variant="body3">Hi,{`${firstName} ${lastName}`}</Typography>
        <CustomButton
          style={{ marginLeft: 10, fontSize: 15, textTransform: "lowercase" }}
          label="Logout"
          startIcon={<ExitToAppIcon />}
          variant="outlined"
          color="secondary"
          onClick={handleLogout}
        />
      </div>
    </nav>
  );
}

export default Navbar;
