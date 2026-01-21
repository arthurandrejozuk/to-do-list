import { useContext, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { FormToDo } from "./components/FormToDo"
import ToDoContext from "./components/ToDoProvider/ToDoContext"
import { ToDoGroup } from "./components/ToDoGroup"

function App() {

  const { toDo, addToDo} = useContext(ToDoContext);

  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  }
  const handleFormSubmit = (formData) => {
    addToDo(formData);
    toggleDialog();
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
           <ToDoGroup 
           itens={toDo.filter(t => !t.completed)}
            heading="Para estudar"
          />
           <ToDoGroup 
           itens={toDo.filter(t => t.completed)}
            heading="Concluído"
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
                <FormToDo onSubmit={handleFormSubmit}/>
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
