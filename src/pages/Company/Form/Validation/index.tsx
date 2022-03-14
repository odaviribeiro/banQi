import * as yup from "yup";
import regexPatterns from "@/utils/Patterns";

export const yupSchema = yup.object().shape({
  name: yup.string().required("Por favor, informe o nome da empresa"),

  cnpj: yup
    .string()
    .required("Por favor, informe o CNPJ da empresa")
    .test(
      "string",
      "Este campo deve esta no formato correto",
      (value): boolean => {
        return regexPatterns.cnpj.test(value || "");
      }
    ),
  description: yup
    .string()
    .required("Por favor, informe a descrição da empresa"),
  logo: yup.string().required("Por favor, informe o logo da empresa"),

  address: yup.object().shape({
    zip: yup
      .string()
      .required("Por favor, informe o CEP da empresa")
      .test(
        "string",
        "Este campo deve esta no formato correto",
        (value): boolean => {
          return regexPatterns.cep.test(value || "");
        }
      ),
    city: yup.string().required("Por favor, informe a cidade da empresa"),
    number: yup.string().required("Por favor, informe a numero da empresa"),
    state: yup.string().required("Por favor, informe o Estado da empresa"),
    street: yup.string().required("Por favor, informe a rua da empresa"),
    neighborhood: yup
      .string()
      .required("Por favor, informe o bairro da empresa"),
  }),
});
