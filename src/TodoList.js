import React, { Component } from "react";
import store from "./store/index";
import { CHANGE_INPUT, DELETE_ITEM, ADD_ITEM } from "./store/actions";
import { changeInputAction, thunkget } from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";
class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.clickBTN = this.clickBTN.bind(this);
    this.changeItem = this.changeItem.bind(this);
    store.subscribe(this.changeInput);
  }
  componentDidMount() {
    const action = thunkget();
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        onChangeInputValue={this.onChangeInputValue}
        clickBTN={this.clickBTN}
        list={this.state.list}
        changeItem={this.changeItem}
      />
    );
  }
  onChangeInputValue(e) {
    console.log(e.target.value);
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  changeInput() {
    this.setState(store.getState());
  }
  clickBTN(e) {
    console.log(e.target.value);
    const action = {
      type: ADD_ITEM,
    };
    store.dispatch(action);
  }
  changeItem(index) {
    console.log(index);
    //console.log(event.target);
    const action = {
      type: DELETE_ITEM,
      index: index,
    };
    store.dispatch(action);
  }
}

export default TodoList;
