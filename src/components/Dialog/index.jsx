import { useEffect, useRef } from 'react'
import './dialog.style.css'
import { IconClose } from '../icons';
import { ButtonSubmit } from '../ButtonSubmit';

export function Dialog({isOpen, onClose, children}) {

  
    // Cria uma referencia para dialog
    const dialogRef = useRef(null);

    useEffect(() => {
        if(isOpen){
            openDialog()
        } else {
            closeDialog();
        }
    },[isOpen])


    // com base nas funções do componente dialog do HTML, pegamos os estados atuais e modificamos
    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    return(
        <>
            <dialog className='dialog' ref={dialogRef}>
                    <div className='close-btn-wrapper'>
                        <button className='btn-close' onClick={onClose}>
                            <IconClose/>
                        </button>
                    </div>
                    {children}
            </dialog> 
        </>
    )
}