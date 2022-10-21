import { useNavigate } from "react-router-dom";
import { Button, Form, HeaderTitle, Headline, Select, Title2, Input, ErrorText } from "../../styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaRegister from "../../schemas/register";
import { useContext } from "react";
import { Context } from "../../context/authContext";

export default function Register() {
    const { handleRegister }: any = useContext(Context);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaRegister), });
    const navigate = useNavigate();

    return (
        <div className="principal">
            <title>Kenzie Hub | Register</title>
            <header>
                <HeaderTitle>KenzieHub</HeaderTitle>
                <button onClick={() => { navigate('/', { replace: true }) }}>Voltar</button>
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
                    <option value="0">Selecione o módulo</option>
                    <optgroup label="Front-End">
                        <option value="1">Módulo 1 - (Introdução a Front-End)</option>
                        <option value="2">Módulo 2 - (Front-End Avançado)</option>
                        <option value="3">Módulo 3 - (React)</option>
                    </optgroup>
                    <optgroup label="Back-End">
                        <option value="4">Módulo 4 - (Back-End com Node.JS)</option>
                        <option value="5">Módulo 5 - (Back-End com Python)</option>
                    </optgroup>
                    <optgroup label="Empregabilidade">
                        <option value="6">Módulo 6 - (Soft Skills e Empregabilidade)</option>
                    </optgroup>
                </Select>
                {errors.courseModule && <ErrorText>{errors.courseModule.message as string}</ErrorText>}
                <Button type="submit">Cadastrar</Button>
            </Form>

        </div>
    )
}