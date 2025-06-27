"use client"
import { useTodos } from "@/store/todos";
import { FormEvent, useState } from "react";


const AddTodo = () => {
    const[todo,settodo]=useState("")

    const {handleAddTodo} =useTodos();

const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  handleAddTodo(todo);
  settodo("")
}

  return (
    <form onSubmit={handleFormSubmit}>
      <input type ="text" placeholder="write todo" name="" 
      value={todo} onChange={(event)=>settodo(event.target.value)}/>
      <button type="submit">ADD</button>
    </form>
  );
}

export default AddTodo
