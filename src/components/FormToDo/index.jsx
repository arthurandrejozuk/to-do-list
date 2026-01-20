import { ButtonSubmit } from '../ButtonSubmit'
import { TextInput } from '../TextInput'
import './form-to-do.style.css'

export function FormToDo({onSubmit}) {
    return(
        <form className='form' action={onSubmit}>
            <TextInput required placeholder={'Digite o item que deseja adicionar'}/>
            <ButtonSubmit>Salvar item</ButtonSubmit>
        </form>
    )
}