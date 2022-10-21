import { HeaderTitle, Form, Title1, Headline, Input, ErrorText, Button, ButtonDisabed, HeadlineBold } from "../../styles/styles";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import schemaLogin from "../../schemas/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Context } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const { handleLogin, useAutoLogin }: any = useContext(Context);
    const navigate = useNavigate()
    useAutoLogin();

    const [eye, setEye] = useState('bx bxs-show');
    const [type, setType] = useState("password");
    function togglePasswordView() {
        type === "password" ? setType("text") : setType("password");
        eye === "bx bxs-show" ? setEye("bx bxs-hide") : setEye("bx bxs-show");
    }



    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaLogin) });

    return (
        <div className="principal">
            <title>Kenzie Hub | Login</title>

            <header id="loginPage">
                <HeaderTitle>KenzieHub</HeaderTitle>
            </header>
            <Form onSubmit={handleSubmit((data) => handleLogin(data))}>
                <Title1 position={'center'}>Login</Title1>
                <Headline>Email</Headline>
                <Input type='email' placeholder='Digite seu email' {...register('email')} />
                {errors.email && <ErrorText>{errors.email.message as string}</ErrorText>}
                <Headline>Senha</Headline>
                <Input type={type} placeholder='Digite sua senha' {...register('password')} />
                <i className={eye} onClick={togglePasswordView}></i>
                {errors.password && <ErrorText>{errors.password.message as string}</ErrorText>}
                <Button type="submit">Entrar</Button>
                <HeadlineBold color={'grey'} position={'center'}>Não possui uma conta?</HeadlineBold>
                <ButtonDisabed onClick={() => { navigate('/register') }}>Cadastre-se</ButtonDisabed>
            </Form>
        </div>
    );
}