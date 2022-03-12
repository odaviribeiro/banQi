import React from "react";
import Form from "../Form";

const Item: React.FC = () => {
  console.log("entrou");

  const handleSubmitForm = (value: any) => {};
  return (
    <Form
      handleSubmitForm={handleSubmitForm}
      initialValues={{
        cnpj: "",
        description: "",
        logo: "",
        name: "",
      }}
    />
  );
};

export default Item;
