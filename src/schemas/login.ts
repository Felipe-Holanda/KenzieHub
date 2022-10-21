import * as yup from "yup";

const schemaLogin = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
});

export default schemaLogin;