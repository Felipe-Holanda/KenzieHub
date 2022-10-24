import { HeaderTitle } from "../../styles/styles";
import { useContext } from "react";
import { Context } from "../../context/authContext";
import { Title1, Headline } from "../../styles/styles";
import Techs from "../../components/Techs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usrTechs, usrWorks } from "../../context/authContext";

export default function Dashboard() {
    const navigate = useNavigate();

    interface imported {
        user?: {
            id: string,
            name: string,
            email: string,
            course_module: string,
            bio: string,
            contact: string,
            techs: usrTechs,
            works: usrWorks,
            avatar_url: string | null,
            length: number
        },
        logout: () => void,
        validSession?: boolean
    }

    const { user, logout, validSession } = useContext(Context) as imported;

    useEffect(() => {
        if (!validSession) {
            navigate('/', { replace: true });
        }
    }, [validSession, navigate])

    return (
        <div className="principal">
            <title>Kenzie Hub | Dashboard</title>
            <header>
                <HeaderTitle>KenzieHub</HeaderTitle>
                <button onClick={logout}>Sair</button>
            </header>
            <div className="container">
                <div className="center">
                    <Title1 position="center">Olá, {user && user.name}!</Title1>
                    <Headline color="grey" position="center">{user && user.course_module}</Headline>
                </div>
                <Techs />
            </div>
        </div>
    )
}