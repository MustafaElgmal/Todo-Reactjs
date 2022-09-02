export const displayTasks=(setfilterTodos,todos)=>{
    setfilterTodos(todos)
}

export const displayCheckedTasks=(setfilterTodos,todos)=>{
  const filter=todos.filter((todo)=>todo.completed)
  setfilterTodos(filter)
  
}

export  const displayUncheckedTasks=(setfilterTodos,todos)=>{
  const filter=todos.filter((todo)=>!todo.completed)
  setfilterTodos(filter)
}

export const CheckAll=(setTodo,todos)=>{
  const filter=todos.map((todo)=>({...todo,completed:true}))
  setTodo(filter)
}

export const UncheckAll=(setTodo,todos)=>{
  const filter=todos.map(todo=>({...todo,completed:false}));
  setTodo(filter)
}

export const removeTodo=(setTodo,todos,id)=>{
  const filter=todos.filter((todo)=>todo.id!==id)
  setTodo(filter)
}

export const togolTodo=(setTodo,todos,id)=>{
  const filter=todos.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:{...todo})
  setTodo(filter)
}

export const filterSearch=(setfilterTodos,todos, value)=>{
    const filter=todos.filter((todo)=>todo.text.toLowerCase().includes(value.toLowerCase()))
    setfilterTodos(filter)

}

export const isChecked=(todo)=>{
  return todo.completed?"checked-todo":"not-checked-todo"
}

export const isDone=(todo)=>{
  return todo.completed?"Undone":"Done"

}