import { useEffect, useState } from "react";
import ToDoContext from "./ToDoContext";

const TODOS = 'toDos'

export function ToDoProvider({ children }) {
  
  const savedToDo = localStorage.getItem(TODOS);
  const [toDo, setToDo] = useState(savedToDo ? JSON.parse(savedToDo) : []);
  
    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(toDo))
    },[toDo])

     const addToDo = (formData) => {
        const description = formData.get('description')
        setToDo(prevState => {
          const todo = {
            id: prevState.length + 1,
            description,
            completed: false,
            createdAt: new Date().toISOString()
          }
          return [...prevState, todo]
        })
        console.log('Precisamos add um novo to do');
      }
    
      const toggleToDoCompleted = (toDo) => {
        setToDo(prevState => {
          return prevState.map(t => {
            if(t.id == toDo.id){
              return {
                ...t,
                completed: !t.completed,
              }
            }
            return t;
          })
        })
      }
    
      const deleteToDo = (toDo) => {
    
        setToDo(prevState =>  {
          return prevState.filter(t => t.id != toDo.id);
        })
      }

    return (
        <ToDoContext value={{toDo, addToDo, toggleToDoCompleted, deleteToDo}}>
            {children}
        </ToDoContext>
    )
    
}