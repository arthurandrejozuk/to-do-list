import './fab-button.style.css'

export function FabButton({ children, ...rest }) {
    return (
        <button {...rest} className='fab'>
            {children}
        </button>
    )
}