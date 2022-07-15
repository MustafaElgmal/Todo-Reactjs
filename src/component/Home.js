import React, { useEffect,useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "./Buttons";
import Todo from "./Todo";
import Search from "./Search";

const Home = () => {
  const [todos,setTodo]=useState(JSON.parse(localStorage.getItem('todos'))||[])
  const [filterTodos,setfilterTodos]=useState(todos)
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
      const ob={id:Math.floor(Math.random()+Date.now()),text:values.todo,completed:false}
      setTodo((prevtodos)=>[...prevtodos,ob])
      formik.resetForm()
    },
  });

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
    setfilterTodos(todos)
},[todos])

// useEffect(()=>{
//   localStorage.setItem("filtertodos",JSON.stringify(filterTodos))
// },[filterTodos])


const displayTasks=()=>{
  setfilterTodos(todos)
  
}
const displayCheckedTasks=()=>{
  const filter=todos.filter((todo)=>todo.completed)
  setfilterTodos(filter)
  
}
const displayUncheckedTasks=()=>{
  const filter=todos.filter((todo)=>!todo.completed)
  setfilterTodos(filter)
  
}
const CheckAll=()=>{
  const filter=todos.map((todo)=>{
    todo.completed=true
    return todo
  })
  setTodo(filter)
}
const UncheckAll=()=>{
  const filter=todos.map(todo=> {
    todo.completed = false;
    return todo;
  });
  setTodo(filter)
}
const removeTodo=(id)=>{
  const filter=todos.filter((todo)=>todo.id!==id)
  setTodo(filter)
}
const togolTodo=(id)=>{
  const filter=todos.map((todo)=>{
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo
  })
  setTodo(filter)
}

const filterSearch=(value)=>{
  if(value!==''){
    const filter=todos.filter((todo)=>{
      return todo.text.toLowerCase().includes(value)
    })
    setfilterTodos(filter)

  }
  
}
  return (
    <section className="main min-vh-100">
    <Search filterSearch={filterSearch} />
      <Buttons prop={{displayTasks,displayCheckedTasks,displayUncheckedTasks,CheckAll,UncheckAll}}/>

      {filterTodos.map((todo)=>(<Todo  key={todo.id} todo={todo} removeTodo={removeTodo} togolTodo={togolTodo}/>))}
      
      <Form >
      <Container className='d-flex justify-content-center mt-5'>
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
      </div>
      <div>
      <Button style={{backgroundColor:'#6F439C'}} onClick={formik.handleSubmit}>Add</Button>
      </div>
      </Container>
      </Form>
    </section>
  );
};

export default Home;
