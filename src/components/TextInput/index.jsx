import './text-input.style.css'

export function TextInput({placeholder, ...rest}) {
    return (
        <input {...rest} type="text" className='text_input' placeholder={placeholder} />
    )
}