"use client"
import { useState } from "react";


const AddTodo = () => {
    const[todo,settodo]=useState(initialState:"")
  return (
    <form onSubmit={handleFormSubmit}>
      <input type ="text" placeholder="write todo" name="" 
      value={todo} onChange={(event)=>settodo(event.target.value)}/>
      <button type="submit">ADD</button>
    </form>
  );
}

export default AddTodo
