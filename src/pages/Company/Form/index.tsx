import { IForm } from "@/interfaces/Form";
import { useFormik } from "formik";
import { ICompany } from "../Interface";
import { yupSchema } from "./Validation";
import Input from "@/components/Input";
import React from "react";
import Text from "@/components/Text";
import { TouchableWithoutFeedback } from "react-native";

function Form({
  handleSubmitForm,
  initialValues,
  loading,
  onPress,
}: IForm<any>) {
  const { handleSubmit, handleChange, values, touched, errors } =
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
      <TouchableWithoutFeedback onPress={handleSubmit}>
        <Text>Registart</Text>
      </TouchableWithoutFeedback>
    </>
  );
}

export default Form;
