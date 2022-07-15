import React from "react";
import { Container, Card, Form } from "react-bootstrap";

const Todo = ({ todo, togolTodo, removeTodo }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        style={{ backgroundColor: "#3D3941", color: "#F4EBDC", width: "35rem" }}
      >
        <Card.Body className="d-flex justify-content-between">
          <div>
            {todo.completed ? (
              <input
                type="checkbox"
                onChange={(e) => togolTodo(todo.id)}
                checked
              />
            ) : (
              <input type="checkbox" onChange={(e) => togolTodo(todo.id)} />
            )}

            <span className="ms-2">{todo.text}</span>
          </div>
          <div>
            <button className="button" onClick={(e) => removeTodo(todo.id)}>
              Remove
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Todo;
