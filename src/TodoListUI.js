import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
class TodoListUI extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <Input
            placeholder={this.props.inputValue}
            style={{
              width: "250px",
              marginRight: "20px",
            }}
            onChange={this.props.onChangeInputValue}
          ></Input>
          <Button type="primary" onClick={this.props.clickBTN}>
            ADD
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  this.props.changeItem(index);
                }}
              >
                {item}
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    );
  }
}

export default TodoListUI;
