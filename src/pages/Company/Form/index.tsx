import { IForm } from "@/interfaces/Form";
import { useFormik } from "formik";
import { ICompany } from "../Interface";
import { yupSchema } from "./Validation";
import Input from "@/components/Input";
import React from "react";
import Text from "@/components/Text";
import { TouchableWithoutFeedback } from "react-native";
import { cnpjRegex } from "@/utils/Regex/Cnpj";

function Form({
  handleSubmitForm,
  initialValues,
  loading,
  onPress,
}: IForm<any>) {
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } =
    useFormik<ICompany>({
      initialValues: initialValues as ICompany,
      validationSchema: yupSchema,
      validateOnChange: false,
      onSubmit: (values) => {
        handleSubmitForm({ ...values });
      },
    });

  return (
    <>
      <Input
        onChangeText={handleChange("name")}
        value={values.name}
        placeholder="Nome da empresa"
        autoCapitalize="none"
        error={!!touched.name && !!errors.name && !values.name}
        msgErro={errors.name}
      />
      <Input
        onChangeText={(value) => setFieldValue("cnpj", cnpjRegex(value))}
        value={values.cnpj}
        placeholder="CNPJ"
        autoCapitalize="none"
        error={!!touched.cnpj && !!errors.cnpj}
        msgErro={errors.cnpj}
      />
      <TouchableWithoutFeedback onPress={handleSubmit}>
        <Text>Registart</Text>
      </TouchableWithoutFeedback>
    </>
  );
}

export default Form;
