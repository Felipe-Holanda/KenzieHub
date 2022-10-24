import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";


export const Context = createContext({});

export interface usrTechs { id?: string, title?: string, status?: string, created_at?: string, updated_at?: string };
export interface usrWorks { id?: string, title?: string, description?: string, deploy_url?: string, created_at?: string, updated_at?: string };

interface userData {
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
}
interface lgnData { email?: string, password?: string }
interface regData { nome: string, email: string, password: string, course_module: string, bio: string, contact: string, courseModule: string }

export interface contextTyped {
    user?: userData,
    token?: string,
    validSession?: boolean,
    logout: () => void,
    handleLogin: (data: lgnData) => Promise<void>,
    handleRegister?: (data: regData) => void,
    useAutoLogin: () => void,
    setToken?: (token: string) => void,
    setUser?: (user: userData | string) => void,
    setValidSession?: (validSession: boolean) => void,
}

export function ContextProvider({ children }: { children: ReactNode }) {

    const navigate = useNavigate();
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [validSession, setValidSession] = useState(false);

    function useAutoLogin() {
        useEffect(() => {
            if (localStorage.length > 0) {
                const token = localStorage.getItem('@TOKEN')
                if (token !== null) {
                    api.get('/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((response) => {
                        navigate('/dashboard')
                        setUser(response.data)
                        setToken(token)
                        setValidSession(true)
                    }).catch(() => {
                        localStorage.clear();
                    })
                }
            }
        }, [])
    }

    function handleLogin(data: lgnData) {
        api.post('/sessions', data).then(response => {
            navigate('/dashboard', { replace: true });
            setUser(response.data.user);
            setToken(response.data.token);
            setValidSession(true);
            toast.success('Login realizado com sucesso!');
            localStorage.setItem('@TOKEN', response.data.token);
            localStorage.setItem('@USER', JSON.stringify(response.data.user));
        }).catch(error => {
            if (error.response.status === 401) {
                toast.error('Email ou senha inválidos!');
            }
        }).catch(() => {
            toast.error('Erro ao realizar login!');
        });
    }

    function logout() {
        localStorage.clear();
        navigate('/', { replace: true });
        setToken('');
        setUser({});
        setValidSession(false);
        toast.info('Sua sessão foi encerrada...');
    }

    function handleRegister(data: regData) {
        api.post('/users', {
            email: data.email,
            password: data.password,
            name: data.nome,
            bio: data.bio,
            contact: data.contact,
            course_module: data.courseModule,
        }).then(() => {
            api.post('/sessions', {
                email: data.email,
                password: data.password,
            }).then((response) => {
                localStorage.setItem('@TOKEN', response.data.token);
                localStorage.setItem('@USER', JSON.stringify(response.data.user));
                toast.success(`Bem vindo, ${response.data.user.name}! Seu registro foi concluido!`);
                navigate('/dashboard', { replace: true });
                return response.data;
            })
        }).catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
                toast.error("E-mail já cadastrado!");
            } else {
                toast.error("Erro ao cadastrar usuário!");
            }
        });
    }

    return (
        <Context.Provider value={{ token, setToken, user, setUser, handleLogin, useAutoLogin, logout, handleRegister, validSession }}>
            {children}
        </Context.Provider>
    );
}