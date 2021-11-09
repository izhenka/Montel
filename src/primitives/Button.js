import React from 'react';
import './button.css'
const Button = ({ children, onClick, primary = false, className = undefined }) =>
    <button
        className={`button ${primary && 'primary'} ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
    ;

export default Button;