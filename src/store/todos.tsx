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
    handleAddTodo:(task:string)=>void
}

export const todosContext= createContext<TodosContext | null>( null)



export const TodosProvider=({children}: {children :ReactNode})=>{

const [todos,settodos]=useState<Todo[]>([]);

    const handleAddTodo=(task: string)=>{
settodos((prev)=>{
    const newtodos : Todo[]=[{
        id:Math.random.toString(),
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
    return (
        <todosContext.Provider value={{todos,handleAddTodo}}>
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

