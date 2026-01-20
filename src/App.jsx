import { useContext, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import { FormToDo } from "./components/FormToDo"
import ToDoContext from "./components/ToDoProvider/ToDoContext"

// const todos = [


//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31"
//   }
// ]
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31"
//   }
// ]

function App() {

  const { toDo, deleteToDo, toggleToDoCompleted, addToDo} = useContext(ToDoContext);

  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          {/* <ToDoGroup 
            heading="Para estudar"
          />
           <ToDoGroup 
            heading="Concluído"
          /> */}
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {toDo.filter(t => !t.completed).map(function (t) {
              return <ToDoItem onDeleteToDo={deleteToDo} onToggle={toggleToDoCompleted} key={t.id} item={t} />
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {toDo.filter(t => t.completed).map(function (t) {
              return <ToDoItem onDeleteToDo={deleteToDo} onToggle={toggleToDoCompleted} key={t.id} item={t} />
            })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
                <FormToDo onSubmit={addToDo}/>
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
