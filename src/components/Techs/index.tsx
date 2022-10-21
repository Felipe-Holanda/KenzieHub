import { Title3 } from "../../styles/styles";

export default function Techs({ children }: any) {
    return (
        <div id="techs">
            <section className="center">
                <Title3>Suas Tecnologias</Title3>
                <i className='bx bx-list-plus'></i>
            </section>
            <ul>
                {children}
            </ul>
        </div>
    )
}