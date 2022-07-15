import React from "react";
import { Button, Container } from "react-bootstrap";

const Buttons = ({prop}) => {
  return (
    <section>
      <Container className="d-flex justify-content-between">
        <div>
          <Button variant="primary" className="button" onClick={prop.displayTasks}>
            All Tasks
          </Button>
        </div>

        <div>
          <Button variant="success" className="button" onClick={prop.displayCheckedTasks}>
            Checked Tasks
          </Button>
        </div>

        <div>
          <Button variant="secondary" className="button" onClick={prop.displayUncheckedTasks}>
            Unchecked Tasks
          </Button>
        </div>
        <div>
          <Button variant="danger" className="button" onClick={prop.CheckAll}>
            Check All
          </Button>
        </div>
        <div>
          <Button variant="warning" className="button" onClick={prop.UncheckAll}>
            Uncheck All
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Buttons;
