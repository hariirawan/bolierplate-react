import Axios from "axios";
import { URL } from "../../config/url";

export function login(fields) {
  return async dispatch => {
    dispatch({ type: "REQUEST_LOGIN" });

    try {
      let res = await Axios.post(URL.LOGIN, fields);
      dispatch({ type: "RECEIVE_LOGIN", payload: res.data.payload });
      return res.data;
    } catch (error) {
      if (error.response) {
        return error.response.data;
      } else {
        return error;
      }
    }
  };
}
