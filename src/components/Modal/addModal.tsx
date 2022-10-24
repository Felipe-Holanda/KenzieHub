import { Button, Headline, Input, Select, Title3 } from "../../styles/styles";
import { useForm } from "react-hook-form";

export default function AddModal({ handleModal, addNewTech }: any) {

    const { register, handleSubmit } = useForm();

    return (
        <span id="modal">
            <div id="modal-content">
                <div id="modal-header">
                    <Title3>Adicionar Tecnologia</Title3>
                    <i className="bx bx-x" onClick={handleModal}></i>
                </div>
                <div id="modal-body">
                    <form onSubmit={handleSubmit((data) => addNewTech(data))}>
                        <Headline>Nome da Tecnologia:</Headline>
                        <Input type="text" placeholder="Ex: ReactJS" {...register('title')} required />
                        <Headline>Nível de proeficiência:</Headline>
                        <Select {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <Button type="submit">Adicionar</Button>
                    </form>
                </div>
            </div>
        </span>
    );
}