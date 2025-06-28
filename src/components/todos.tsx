"use client"

import { useTodos } from '@/store/todos'
import React from 'react'
import { useSearchParams } from 'next/navigation'


const Todos = () => {

    const {todos,handleTodoCompleted,toggleTodoAsCompleted}=useTodos()
    console.log(todos);


const searchParams=useSearchParams();
    const todosfilter= searchParams.get('todos');
    let filtertodos=todos;

    if(todosfilter==="active"){
        filtertodos=filtertodos.filter((todo)=>!todo.completed)
    }else if(todosfilter==="completed"){
        filtertodos=filtertodos.filter((todo)=>todo.completed)
    }

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
