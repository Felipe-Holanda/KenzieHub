import { Button, ButtonDisabed, Headline, Input, Select, Title3 } from "../../styles/styles";
import { useState } from "react";

interface propsFunctions {
    handleEditModal: (data: string | {}) => void | string,
    techId: {
        id: string,
        title: string,
        status: string,
        created_at: string,
        updated_at: string
    },
    editTech: (value: string, level: string) => void,
    deleteTech: (data: string) => void
}



export default function EditModal({ handleEditModal, techId, editTech, deleteTech }: propsFunctions) {


    const [level, setLevel]: any = useState("Selecione o Nível")

    return (
        <span id="modal">
            <div id="modal-content">
                <div id="modal-header">
                    <Title3>Adicionar Tecnologia</Title3>
                    <i className="bx bx-x" onClick={() => { handleEditModal({}) }}></i>
                </div>
                <div id="modal-body">
                    <form onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <Headline>Nome da Tecnologia:</Headline>
                        <Input type="text" value={techId.title} disabled />
                        <Headline>Nível de proeficiência:</Headline>
                        <Select value={level} onChange={(data) => setLevel(data.target.value)}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <Button type="submit" onClick={() => { editTech(techId.id, level) }} >Editar</Button>
                        <ButtonDisabed onClick={() => { deleteTech(techId.id) }}>Deletar</ButtonDisabed>
                    </form>
                </div>
            </div>
        </span>
    );
}