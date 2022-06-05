import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { ButtonGroup, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../../components/custom-button";
import classes from "./style.module.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { loginUser } from "../../Redux/Actions/login.action";
import LoginForm from "./from";
import storage from "../../common/api/storage";

const Login = (props) => {
  const state = useSelector((state) => state.user);

  const { loginError, isAuthenticated } = state;
  const token = storage.get("token");
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    debugger;
    dispatch(loginUser(user, props.history));
    setUser({ username: "", password: "" });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.mainContainer}>
      <div className={classes.contentView}>
        <span>
          <h2>Welcome to </h2>
          <h1>TRUSTED MESSAGING</h1>
          <h2> Company</h2>
        </span>
      </div>
      <div className={classes.formView}>
        <span>
          <CustomButton
            label="Back"
            style={{ fontSize: 11, textTransform: "capitalize", opacity: 0.7 }}
            onClick={() => alert("hi")}
            startIcon={<KeyboardBackspaceIcon />}
          />
        </span>
        <div className={classes.formCnt}>
          <ButtonGroup
            className={classes.groupBtn}
            color="primary"
            aria-label="outlined primary button group"
          >
            <CustomButton label="Login" />
            <CustomButton label="Registration" />
          </ButtonGroup>
          <div>
            <img src="/images/logo.png" />
          </div>
          <div>
            <Typography variant="body1" className={classes.title}>
              Welcome To <br /> Trusted Messaging
            </Typography>
            <span>
              {loginError && user.username === "" ? (
                <Typography className={classes.errorText}>
                  Error! Your username or password incorrect
                </Typography>
              ) : (
                <Typography className={classes.subtitle}>Login</Typography>
              )}
            </span>
          </div>
          <LoginForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            values={user}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
