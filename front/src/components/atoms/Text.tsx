
import React from 'react'

interface TextProps {
    children: React.ReactElement;
    className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
    return <div className={className}>{children}</div>
}

export default Text