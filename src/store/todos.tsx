"useClient"

import { createContext, ReactNode, useContext, useState } from "react";

export type Todo{
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type todosContext={
    todos:Todo[];
    handleAddTodo:(task:string)=>void
}

export const todosContext= createContext<todosContext | null>( null)

const [todos,settodos]=useState<Todo[]>([]);

export const TodosProvider=(children: {children :ReactNode})=>{
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
})
return newtodos;
    }
    return (
        <todosContext.Provider value={{todos,handleAddTodo}}>
            {children}
        </todosContext.Provider>
    )
}

//context api
export function useTodos{
    const todosContextValue= useContext(todosContext);
    if(!todosContext){
        throw new Error("use todos usde outside of provider");
    }
    return todosContextValue;
}