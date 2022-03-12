import React from "react";
import Form from "../Form";

const Item: React.FC = () => {
  const handleSubmitForm = (value: any) => {};
  return (
    <Form
      handleSubmitForm={handleSubmitForm}
      initialValues={{
        cnpj: "",
        description: "",
        logo: "",
        name: "",
        revenue: 0,
        address: {
          city: "",
          complement: "",
          neighborhood: "",
          number: "",
          state: "",
          street: "",
          zip: "",
        },
      }}
    />
  );
};

export default Item;
