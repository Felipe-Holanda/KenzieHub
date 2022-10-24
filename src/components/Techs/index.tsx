import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Title3, HeadlineBold } from "../../styles/styles";
import AddModal from "../Modal/addModal";
import EditModal from "../Modal/editModal";

export default function Techs() {

    const [userTechs, setUserTechs] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [techId, setTechId] = useState({
        id: "",
        title: "",
        status: "",
        created_at: "",
        updated_at: ""
    });


    function handleModal() {
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
            }
        }).then((response) => {
            setUserTechs(response.data.techs)
        })
    }, [])

    function handleEditModal(value: any) {
        setTechId(value)
        setEditModal(!editModal);
    }

    function editTech(value: string, level: string) {
        api.put(`/users/techs/${value}`, { status: level }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
            }
        }).then((response) => {
            toast.success('Tecnologia editada com sucesso!')
            handleEditModal({})
            api.get('/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
                }
            }).then((response) => {
                setUserTechs(response.data.techs)
            })
        }).catch((error) => {
            toast.error('Erro ao editar tecnologia!')
        })
    }

    function deleteTech(value: string) {
        api.delete(`/users/techs/${value}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
            }
        }).then((response) => {
            toast.success('Tecnologia deletada com sucesso!')
            handleEditModal({})
            api.get('/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
                }
            }).then((response) => {
                setUserTechs(response.data.techs)
            })
        }).catch((error) => {
            toast.error('Erro ao deletar tecnologia!')
        })
    }

    interface Itech {
        id?: string,
        title?: string,
        status?: string,
        created_at?: string,
        updated_at?: string
    }

    function mapTechs() {
        if (userTechs.length > 0) {
            return userTechs.map((tech: Itech) => {
                return (
                    <li key={tech.title} onClick={() => { handleEditModal(tech) }}>
                        <Title3>{tech.title}</Title3>
                        <HeadlineBold color="grey">{tech.status}</HeadlineBold>
                    </li>
                )
            })
        } else {
            return <HeadlineBold color="white" position="center">Você ainda não possui tecnologias cadastradas</HeadlineBold>
        }
    }

    function addNewTech(data: { title: string, status: string }) {
        api.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
            }
        }).then((response) => {
            toast.success('Tecnologia adicionada com sucesso!');
            handleModal();
            api.get('/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`
                }
            }).then((response) => {
                setUserTechs(response.data.techs)
            })
        }).catch((error) => {
            if (error.response.status === 401) {
                toast.warn('Não é possível cadastrar a mesma tecnologia novamente! Para a alterar, clique nela!');
            } else {
                toast.error('Houve um problema ao adicionar a tecnologia, sua conexão está estável?');
                console.log(error)
                handleModal();
            }
        })
    }

    return (
        <>
            {editModal && <EditModal handleEditModal={handleEditModal} techId={techId} editTech={editTech} deleteTech={deleteTech} />}
            {modalVisible && <AddModal addNewTech={addNewTech} handleModal={handleModal} />}

            <div id="techs">
                <section className="heading">
                    <Title3>Suas Tecnologias</Title3>
                    <i className='bx bx-list-plus' onClick={() => handleModal()}></i>
                </section>
                <ul>
                    {mapTechs()}
                </ul>
            </div>
        </>
    )
}