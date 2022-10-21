import * as yup from "yup";

const schemaRegister = yup.object().shape({
    nome: yup.string().required("Campo obrigatório").matches(/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi, "Preencha com Nome e Sobrenome!"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "E-mail inválido"),
    password: yup.string().min(6, "Mínimo de 6 caracteres").required("Campo obrigatório").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,13}$/, "Para sua segurança, sua senha deve conter no mínimo 6 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 Caractere especial (@, #, $, %, &, *, !, ?, etc)"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não coincidem").required("Campo obrigatório"),
    bio: yup.string().required("Preencha este campo").matches(/^.{10,}$/, "Não seja tímido, Fale um pouco sobre você! (15 Caracteres no mínimo)"),
    contact: yup.string().required("Campo obrigatório"),
    courseModule: yup.string().required("Campo obrigatório").matches(/^(1|2|3|4|5|6)$/, "Módulo inválido"),
})

export default schemaRegister;