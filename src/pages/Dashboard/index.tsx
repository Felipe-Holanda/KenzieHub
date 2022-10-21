import { HeaderTitle } from "../../styles/styles";
import { useContext } from "react";
import { Context, contextType } from "../../context/authContext";
import { Title1, Headline } from "../../styles/styles";
import Techs from "../../components/Techs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const { user, logout, validSession }: contextType = useContext(Context);

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
                <div className="">
                    <Techs>

                    </Techs>
                </div>
            </div>
        </div>
    )
}