import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().email().required(),
  Password: yup.string().min(4).max(10).required(),
});
