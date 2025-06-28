"use client"

import { useTodos } from '@/store/todos'
import React from 'react'

const Todos = () => {

    const {todos,handleTodoCompleted,toggleTodoAsCompleted}=useTodos()
    console.log(todos);

    let filtertodos=todos;

  return (
    <ul>
        {
filtertodos.map((todos)=>{
    return <li key={todos.id}>
        
            <input type="checkbox" name="" id={`todos-${todos.id}`} checked={todos.completed} onChange={()=>toggleTodoAsCompleted(todos.id)}/>

        <label htmlFor={`todos-${todos.id}`}>{todos.task}</label>

        {
            
todos.completed && (
                <button type='button' onClick={()=>handleTodoCompleted(todos.id)}>delete</button>
            )

        }
        
        
    </li>
} )
        }
      
    </ul>
  )
}

export default Todos
