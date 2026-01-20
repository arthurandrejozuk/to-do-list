import { useRef } from 'react'
import './dialog.style.css'

export function Dialog() {

    // Cria uma referencia para dialog
    const dialogRef = useRef(null);

    // com base nas funções do componente dialog do HTML, pegamos os estados atuais e modificamos
    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    return(
        <>
            <dialog ref={dialogRef}>
                <button onClick={closeDialog} autoFocus>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog> 
            <button onClick={openDialog}>Show the dialog</button>
        </>
    )
}