import { IForm } from "@/interfaces/Form";
import { useFormik } from "formik";
import { ICompany } from "../Interface";
import { yupSchema } from "./Validation";
import Input from "@/components/Input";
import React from "react";
import { cnpjRegex } from "@/utils/Regex/Cnpj";
import { cepRegex } from "@/utils/Regex/Cep";
import ButtomForm from "@/components/Buttom/ButtomForm";
import InnerPage from "@/components/InnerPage";
import Text from "@/components/Text";

function Form({ handleSubmitForm, initialValues }: IForm<any>) {
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
    <InnerPage>
      <Text fontWeight="600">Informações da empresa</Text>
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

      <Input
        onChangeText={handleChange("description")}
        value={values.description}
        placeholder="Descrição"
        autoCapitalize="none"
        error={!!touched.description && !!errors.description}
        msgErro={errors.description}
      />

      <Input
        onChangeText={handleChange("logo")}
        value={values.logo}
        placeholder="Logo"
        autoCapitalize="none"
        error={!!touched.logo && !!errors.logo}
        msgErro={errors.logo}
      />

      <Input
        onChangeText={handleChange("revenue")}
        value={String(values.revenue || "")}
        placeholder="Receita"
        autoCapitalize="none"
        error={!!touched.revenue && !!errors.revenue}
        msgErro={errors.revenue}
      />
      <Text mt="12px" fontWeight="600">
        Endereço da empresa
      </Text>
      <Input
        onChangeText={(value) => setFieldValue("address.zip", cepRegex(value))}
        value={String(values.address?.zip || "")}
        placeholder="CEP"
        autoCapitalize="none"
        error={!!touched.address?.zip && !!errors.address?.zip}
        msgErro={errors.address?.zip}
      />

      <Input
        onChangeText={handleChange("address.city")}
        value={values.address?.city}
        placeholder="Cidade"
        autoCapitalize="none"
        error={!!touched.address?.city && !!errors.address?.city}
        msgErro={errors.address?.city}
      />

      <Input
        onChangeText={handleChange("address.complement")}
        value={values.address?.complement}
        placeholder="Complemento"
        autoCapitalize="none"
      />

      <Input
        onChangeText={handleChange("address.neighborhood")}
        value={values.address?.neighborhood}
        placeholder="vizinhança"
        autoCapitalize="none"
      />

      <Input
        onChangeText={handleChange("address.number")}
        value={String(values.address?.number || "")}
        keyboardType="numeric"
        placeholder="Número"
        autoCapitalize="none"
        error={!!touched.address?.number && !!errors.address?.number}
        msgErro={errors.address?.number}
      />

      <Input
        onChangeText={handleChange("address.state")}
        value={values.address?.state}
        placeholder="Estado"
        autoCapitalize="none"
        error={!!touched.address?.state && !!errors.address?.state}
        msgErro={errors.address?.state}
      />

      <Input
        onChangeText={handleChange("address.street")}
        value={values.address?.street}
        placeholder="Rua"
        autoCapitalize="none"
        error={!!touched.address?.street && !!errors.address?.street}
        msgErro={errors.address?.street}
      />

      <ButtomForm onPress={handleSubmit} />
    </InnerPage>
  );
}

export default Form;
