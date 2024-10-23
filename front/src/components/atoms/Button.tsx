import React from 'react'

interface ButtonProps {
    onClick: () => void;
    value: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value, className }) => {
    return (
        <input
            className={className}
            type="button"
            onClick={onClick}
            value={value}
        />
    )
}

export default Button