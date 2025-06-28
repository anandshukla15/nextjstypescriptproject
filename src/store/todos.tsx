"use client"

import { createContext, ReactNode, useContext, useState } from "react";

export type Todo={
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext={
    todos:Todo[];
    handleAddTodo:(task:string)=>void;
    toggleTodoAsCompleted:(id:string)=>void;
    handleTodoCompleted:(id:string)=>void;
}

export const todosContext= createContext<TodosContext | null>( null)



export const TodosProvider=({children}: {children :ReactNode})=>{

const [todos,settodos]=useState<Todo[]>([]);

    const handleAddTodo=(task: string)=>{
settodos((prev)=>{
    const newtodos : Todo[]=[{
        id:Math.random().toString(),
        task,
        completed:false,
        createdAt: new Date()
    },
    ...prev
]
return newtodos;
}
)

    }


//if task completed


const toggleTodoAsCompleted=(id: string)=>{
    settodos((prev)=>{
        const newtodos=prev.map((task)=>{
       if(task.id===id){
        return{...task, completed:!task.completed}
       }
       return task;
        })
        return newtodos;
    })
}

// if task is deleted

const handleTodoCompleted=(id:string)=>{
settodos((prev)=>{
        const newtodos=prev.filter((task)=>task.id!==id
       
    
        )
        return newtodos;
    })
}





    return (
        <todosContext.Provider value={{todos,handleAddTodo,toggleTodoAsCompleted,handleTodoCompleted}}>
            {children}
        </todosContext.Provider>
    )
}

//context api
export function useTodos(){
    const todosContextValue= useContext(todosContext);
    if(!todosContextValue){
        throw new Error("use todos usde outside of provider");
    }
    return todosContextValue;
}

