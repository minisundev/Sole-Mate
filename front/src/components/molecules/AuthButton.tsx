import React from 'react'
import Button from '../atoms/Button.tsx'

interface AuthButtonProps {
    loggedIn: boolean;
    onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ loggedIn, onClick }) => {
    return (
        <div className={'buttonContainer'}>
            <Button
                className={'inputButton'}
                onClick={onClick}
                value={loggedIn ? 'Log Out' : 'Log In'}
            />
        </div>
    )
}

export default AuthButton