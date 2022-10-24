import { Link } from "react-router-dom";
import { Button, Form, HeaderTitle, Headline, Select, Title2, Input, ErrorText } from "../../styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaRegister from "../../schemas/register";
import { useContext } from "react";
import { Context } from "../../context/authContext";

interface propsFunctions {
    handleRegister: (data: string | {}) => void | string,
}

export default function Register() {
    const { handleRegister } = useContext(Context) as propsFunctions;
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaRegister), });

    return (
        <div className="principal">
            <title>Kenzie Hub | Register</title>
            <header>
                <HeaderTitle>KenzieHub</HeaderTitle>
                <Link to="/" id="headerBtn">Voltar</Link>
            </header>
            <Form onSubmit={handleSubmit((data) => {
                handleRegister(data);
            })}>
                <Title2 position="center">Crie sua conta</Title2>
                <Headline color="grey" position="center">Rapido e gratis, vamos nessa</Headline>
                <Headline>Nome e Sobrenome</Headline>
                <Input type="text" placeholder="Digite aqui seu nome e sobrenome" {...register('nome')} />
                {errors.nome && <ErrorText>{errors.nome.message as string}</ErrorText>}
                <Headline>Email</Headline>
                <Input type="email" placeholder="Digite aqui seu email" {...register('email')} />
                {errors.email && <ErrorText>{errors.email.message as string}</ErrorText>}
                <Headline>Senha</Headline>
                <Input type="password" placeholder="Digite aqui sua senha" {...register('password')} />
                {errors.password && <ErrorText>{errors.password.message as string}</ErrorText>}
                <Headline>Confirme sua senha</Headline>
                <Input type="password" placeholder="Repita aqui sua senha" {...register('confirmPassword')} />
                {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message as string}</ErrorText>}
                <Headline>Bio</Headline>
                <Input type="text" placeholder="Fale sobre você!" {...register('bio')} />
                {errors.bio && <ErrorText>{errors.bio.message as string}</ErrorText>}
                <Headline>Contato</Headline>
                <Input type="text" placeholder="Opção de contato" {...register('contact')} />
                {errors.contact && <ErrorText>{errors.contact.message as string}</ErrorText>}
                <Headline>Módulo</Headline>
                <Select {...register('courseModule')}>
                    <option value="Selecione"></option>
                    <optgroup label="Front-End">
                        <option value="Módulo 1 - (Introdução a Front-End)">Módulo 1 - (Introdução a Front-End)</option>
                        <option value="Módulo 2 - (Front-End Avançado)">Módulo 2 - (Front-End Avançado)</option>
                        <option value="Módulo 3 - (React)">Módulo 3 - (React)</option>
                    </optgroup>
                    <optgroup label="Back-End">
                        <option value="Módulo 4 - (Back-End com Node.JS)">Módulo 4 - (Back-End com Node.JS)</option>
                        <option value="Módulo 5 - (Back-End com Python)">Módulo 5 - (Back-End com Python)</option>
                    </optgroup>
                    <optgroup label="Empregabilidade">
                        <option value="Módulo 6 - (Soft Skills e Empregabilidade)">Módulo 6 - (Soft Skills e Empregabilidade)</option>
                    </optgroup>
                </Select>
                {errors.courseModule && <ErrorText>{errors.courseModule.message as string}</ErrorText>}
                <Button type="submit">Cadastrar</Button>
            </Form>

        </div>
    )
}