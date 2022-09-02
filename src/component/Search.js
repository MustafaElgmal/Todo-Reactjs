import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { filterSearch } from "../utils/functions";
import Buttons from "./Droupdown";

const Search = ({ prop }) => {
  return (
    <Navbar className="search" style={{height:'10%'}}>
      <Container className="d-flex justify-content-center gap-2">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) =>
              filterSearch(prop.setfilterTodos, prop.todos, e.target.value)
            }
            name="search"
          />
        </div>
        <Buttons prop={prop} />
      </Container>
    </Navbar>
  );
};

export default Search;
