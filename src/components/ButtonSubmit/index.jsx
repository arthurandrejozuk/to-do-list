import './button-submit.style.css'

export function ButtonSubmit({children, ...rest}) {
    return(
        <button className='button' {...rest} autoFocus>{children}</button>
    )
}