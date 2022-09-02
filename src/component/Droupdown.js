import React from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import {
  CheckAll,
  displayCheckedTasks,
  displayTasks,
  displayUncheckedTasks,
  UncheckAll,
} from "../utils/functions";

const Buttons = ({ prop }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
      Filter to-do
      </Dropdown.Toggle>
      <Dropdown.Menu style={{background:'#353239'}}>
        <Dropdown.Item>
          {" "}
          <Button
            variant="secondary"
            className="button"
            onClick={() => displayTasks(prop.setfilterTodos, prop.todos)}
          >
            All Tasks
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button
            variant="secondary"
            className="button"
            onClick={() => displayCheckedTasks(prop.setfilterTodos, prop.todos)}
          >
            Checked Tasks
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          {" "}
          <Button
            variant="secondary"
            className="button"
            onClick={() =>
              displayUncheckedTasks(prop.setfilterTodos, prop.todos)
            }
          >
            Unchecked Tasks
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button
            variant="secondary"
            className="button"
            onClick={() => CheckAll(prop.setTodo, prop.todos)}
          >
            Check All
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button
            variant="secondary"
            className="button"
            onClick={() => UncheckAll(prop.setTodo, prop.todos)}
          >
            Uncheck All
          </Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Buttons;
