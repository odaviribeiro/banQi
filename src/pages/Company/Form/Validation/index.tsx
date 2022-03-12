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
});
