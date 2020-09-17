import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actions";
import axios from "axios";
export const changeInputAction = (val) => {
  return {
    type: CHANGE_INPUT,
    value: val,
  };
};

export const thunkget = () => {
  return (dispatch) => {
    axios
      .get(
        "https://easy-mock.com/mock/5f634234d75a98083f498ef6/example/test/list"
      )
      .then((res) => {
        console.log(res);
        dispatch(changeInputAction("work"));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
