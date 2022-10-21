import { ButtonDisabed, HeaderTitle, Headline } from "../../styles/styles";
import { Link } from "react-router-dom";

export default function Error() {

    const errorMessages = [
        "Acho que você não deveria estar aqui...",
        "Estamos a deriva no mar?",
        "O que você está fazendo aqui?",
        "Você cavalgou para muito longe, forasteiro!",
        "Está perdido?",
        "Longe de casa...",
    ]

    function RightRedirect() {
        if (document.cookie.length > 0) {
            return <Link to="/dashboard"><ButtonDisabed>Voltar</ButtonDisabed></Link>
        } else {
            return <Link to="/"><ButtonDisabed>Voltar</ButtonDisabed></Link>
        }
    }


    const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    return (
        <div id="errorPage">
            <title>Página não encontrada!</title>
            <i className='bx bxs-ghost'></i>
            <HeaderTitle>{randomMessage}</HeaderTitle>
            <Headline color="grey">A página que você está tentando acessar não existe!</Headline>
            {RightRedirect()}
        </div>
    )
}