import './button.css'
const Button = ({children, onClick, primary, className}) =>
    <button
        className={`button ${primary && 'primary'} ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
;

export default Button;