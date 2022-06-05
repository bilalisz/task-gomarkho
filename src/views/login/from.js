import React from "react";
import { Typography } from "@material-ui/core";
import InputField from "../../components/input-field";
import CustomButton from "../../components/custom-button";
import { useSelector } from "react-redux";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

function LoginForm(props) {
  const { onChange, onSubmit, values } = props;
  const loading = useSelector((state) => state.user.isLogging);
  return (
    <form
      onSubmit={onSubmit}
      style={{ marginTop: 10, display: "flex", flexDirection: "column" }}
    >
      <InputField
        label="E-Mail Address"
        name="username"
        value={values.username}
        onChange={onChange}
        disabled={loading}
        email
        required
      />
      <InputField
        label="Password"
        name="password"
        value={values.password}
        onChange={onChange}
        disabled={loading}
        password
        required
      />
      <Typography
        variant="body1"
        style={{ textAlign: "end", fontSize: 12, margin: "5px 0px" }}
      >
        Forget Password?
      </Typography>
      <CustomButton
        label={loading ? "Logining..." : "Login"}
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
      />
    </form>
  );
}

export default LoginForm;
