import React from "react";
import WelcomeMessage from "../molecules/WelcomeMessage.tsx";
import AuthButton from "../molecules/AuthButton.tsx";
import Text from "../atoms/Text.tsx";

interface HomeContentProps {
    loggedIn: boolean;
    email: string;
    onButtonClick: () => void;
}

const HomeContent: React.FC<HomeContentProps> = ({ loggedIn, email, onButtonClick }) => {
    return (
        <div className="mainContainer"
        >
            <WelcomeMessage />
            <Text><>to Sole Mates</></Text>
            <AuthButton loggedIn={loggedIn} onClick={onButtonClick} />
            {loggedIn ? <Text><>{email}</></Text> : null}
        </div>
    )
}

export default HomeContent