import * as yup from "yup";

export const yupSchema = yup.object().shape({
  name: yup.string().required("Por favor, informe o nome da empresa "),
});
