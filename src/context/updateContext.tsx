import { createContext, useContext, useState } from "react";
import { HeadlineBold } from "../styles/styles";

export const UpdateContext = createContext({});


export default function UpdateProvider({ children }: any) {
    type usrTechs = { id: string, title: string, status: string, created_at: string, updated_at: string }
    type usrWorks = { id: string, title: string, description: string, deploy_url: string, created_at: string, updated_at: string }
    const { user }: any = useContext(UpdateContext);
    const [userTechs, setUserTechs] = useState(user.techs);
    const [userWorks, setUserWorks] = useState(user.works);

    function mapTechs() {
        if (userTechs.length > 0) {
            userTechs.map((element: usrTechs) => {
                console.log(element)
            })
        } else {
            return <HeadlineBold position="center">Você ainda não possui tecnologias cadastradas</HeadlineBold>
        }
    }

    function mapWorks() {
        if (userWorks.length > 0) {
            userWorks.map((element: usrWorks) => {
                console.log(element)
            })
        } else {
            return <HeadlineBold position="center">Você ainda não possui trabalhos cadastrados</HeadlineBold>
        }
    }

    function addNewTech(data: { title: string, status: string }) {
        setUserTechs([...userTechs, data])
    }


    return (
        <UpdateContext.Provider value={{ setUserTechs, setUserWorks, mapTechs, mapWorks }}>
            {children}
        </UpdateContext.Provider>
    );
}