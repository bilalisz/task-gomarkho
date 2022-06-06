import axios from "axios";
import storage from "../../common/api/storage";
import {
  BASE_URL,
  SET_AUTHENTICATION_STORE,
  SET_AUTHORIZATION_STORE,
} from "../constants";

export const loginUser = (payload, history) => {
  return (dispatch) => {
    dispatch(
      setAuthenticationStore({
        isLogging: true,
      })
    );
    return axios
      .post(
        `${BASE_URL}v1/user/59b815032f56d305536a5141/customerLogin`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(({ data }) => {
        if (data.message === "Success") {
          storage.set("user", data.data);
          storage.set("token", data.data.apiToken);

          dispatch(
            setAuthenticationStore({
              isLogging: false,
              isAuthenticated: true,
              user: data.data,
            })
          );

          history.push("/");
        } else {
          dispatch(
            setAuthenticationStore({
              isLogging: false,
            })
          );
        }
        return data;
      })
      .catch(({ response }) => {
        dispatch(
          setAuthenticationStore({
            isLogging: false,
            isAuthenticated: false,
            user: null,
            loginError: response.data.message.toString(),
          })
        );
        if (response.status === 403 || response.status === 401) {
          storage.clear();
        }
        return response.data;
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    storage.clear();
    return dispatch(
      setAuthenticationStore({
        isAuthenticated: false,
        loginError: null,
        user: null,
      })
    );
  };
};

export const setAuthenticationStore = (payload) => {
  return {
    type: SET_AUTHENTICATION_STORE,
    payload: payload,
  };
};

export const alreadyLogin = (payload) => {
  return {
    type: SET_AUTHORIZATION_STORE,
    payload: payload,
  };
};
