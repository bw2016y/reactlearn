import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store/index";
const data = ["aaa", "bbb", "ccc"];

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <Input
            placeholder={this.state.inputValue}
            style={{
              width: "250px",
              marginRight: "20px",
            }}
          ></Input>
          <Button type="primary">ADD</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          ></List>
        </div>
      </div>
    );
  }
}

export default TodoList;
