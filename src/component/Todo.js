import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { isChecked, isDone, removeTodo, togolTodo } from "../utils/functions";

const Todo = ({ prop }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        style={{ backgroundColor: "#3D3941", color: "#F4EBDC", width: "35rem" }}
      >
        <Card.Body className="d-flex justify-content-between">
          <div>
            <span
              className={isChecked(prop.todo)}
            >
              {prop.todo.text}
            </span>
          </div>
          <div className="d-flex ">
          <button
              className="button"
              onClick={(e) =>
                togolTodo(prop.setTodo, prop.todos, prop.todo.id)
              }
            >
              {isDone(prop.todo)}
            </button>
            <button
              className="button"
              onClick={(e) =>
                removeTodo(prop.setTodo, prop.todos, prop.todo.id)
              }
            >
              Remove
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Todo;
