import React from "react";
import HomeContent from "../organisms/HomeContent.tsx";
import { useNavigate } from "react-router-dom";

interface HomePageProps {
    loggedIn: boolean;
    email: string;
}

const HomePage: React.FC<HomePageProps> = ({ loggedIn, email }) => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {

        } else {
            navigate('/login')
        }
    }

    return (
        <HomeContent loggedIn={loggedIn} email={email} onButtonClick={onButtonClick} />
    )
}

export default HomePage