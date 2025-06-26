import { createContext, ReactNode, useState } from "react";

type todo{
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export const todosContext= createContext( null)

const [todos,settodos]=useState();

export const TodosProvider=(children: {children :ReactNode})=>{
    const handleAddTodo=(task: string)=>{
settodos((prev)=>{
    const newtodos : todo[]=[{
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
}