import store from ".";
import { CHANGE_INPUT, DELETE_ITEM, ADD_ITEM } from "./actions";

const defaultState = {
  inputValue: "default",
  list: ["aaa", "bbb", "cccc"],
};

export default (state = defaultState, action) => {
  console.log(state, action);
  //reducer里只能接受state，不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
