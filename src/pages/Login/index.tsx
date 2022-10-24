import { HeaderTitle, Form, Title1, Headline, Input, ErrorText, Button, HeadlineBold } from "../../styles/styles";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import schemaLogin from "../../schemas/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Context } from "../../context/authContext";
import { Link } from "react-router-dom";
import { contextTyped } from "../../context/authContext";

export default function Login() {
    const { handleLogin, useAutoLogin } = useContext(Context) as contextTyped
    useAutoLogin()

    const [eye, setEye] = useState('bx bxs-show');
    const [type, setType] = useState("password");
    function togglePasswordView() {
        if (type === "password") { setType("text") } else { setType("password"); }
        if (eye === "bx bxs-show") { setEye("bx bxs-hide") } else { setEye("bx bxs-show"); }
    }

    type Idata = {
        email: string,
        password: string
    } | {}

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaLogin) });



    return (
        <div className="principal">
            <title>Kenzie Hub | Login</title>

            <header id="loginPage">
                <HeaderTitle>KenzieHub</HeaderTitle>
            </header>
            <Form onSubmit={handleSubmit((data: Idata) => handleLogin(data))}>
                <Title1 position={'center'}>Login</Title1>
                <Headline>Email</Headline>
                <Input type='email' placeholder='Digite seu email' {...register('email')} />
                {errors.email && <ErrorText>{errors.email.message as string}</ErrorText>}
                <Headline>Senha</Headline>
                <Input type={type} placeholder='Digite sua senha' {...register('password')} />
                <i className={eye} onClick={() => togglePasswordView()}></i>
                {errors.password && <ErrorText>{errors.password.message as string}</ErrorText>}
                <Button type="submit">Entrar</Button>
                <HeadlineBold color={'grey'} position={'center'}>Não possui uma conta?</HeadlineBold>
                <Link id="linkToRegister" to="/register">Cadastre-se</Link>
            </Form>
        </div>
    );
}