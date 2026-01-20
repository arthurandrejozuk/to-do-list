import { useState } from "react";
import ToDoContext from "./ToDoContext";

export function ToDoProvider ({children}) {
    const [toDo, setToDo] = useState([
        {
            id: 1,
            description: "JSX e componentes",
            completed: false,
            createdAt: "2022-10-31"
        },
        {
            id: 2,
            description: "Props, state e hooks",
            completed: true,
            createdAt: "2022-10-31"
        }
    ])

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