import React, { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Todo from "../component/Todo";
import Search from "../component/Search";

const Home = () => {
  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filterTodos, setfilterTodos] = useState(todos);
  const formik = useFormik({
    initialValues: {
      todo: "",
    },
    validationSchema: Yup.object({
      todo: Yup.string()
        .max(100, "Max is 100 character !")
        .required("This is required !"),
    }),
    onSubmit: (values) => {
      const ob = {
        id: Math.floor(Math.random() + Date.now()),
        text: values.todo,
        completed: false,
      };
      setTodo((prevtodos) => [...prevtodos, ob]);
      formik.resetForm();
    },
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setfilterTodos(todos);
  }, [todos]);

  return (
    <section className="main">
      <Search prop={{ todos, setfilterTodos, setTodo }} />
      <div className="d-flex justify-content-center">
      <div className="todo mt-5" style={{background:'#353239'}}>
          {filterTodos.map((todo) => (
            <Todo key={todo.id} prop={{ todos, setTodo, todo }} />
          ))}
      </div>
      </div>

      <Form>
        <Container className="d-flex justify-content-center mt-5">
          <div className="form-group has-search">
            <input
              type="text"
              className="form-control"
              placeholder="Enter somthing to-do"
              name="todo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.todo}
            />
            <div>
            {formik.errors.todo && formik.touched.todo?<p  className="text-danger">{formik.errors.todo}</p>:null}
            </div>
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#6F439C",
                border: "#6F439C",
                padding: "7px",
                width: "60px",
              }}
              onClick={(e)=>{
                e.preventDefault()
                formik.handleSubmit()
              }}
            >
              Add
            </Button>
           
            
          </div>
          
        </Container>
      </Form>
    </section>
  );
};

export default Home;
