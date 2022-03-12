import { StateRedux } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import Form from "../Form";
import { ICompany } from "../Interface";

const Item: React.FC = () => {
  const company = useSelector<StateRedux, ICompany>((state) => state.company);
  const handleSubmitForm = (value: any) => {};
  console.log(company);

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
