import { StateRedux } from "@/store";
import { AxiosError } from "axios";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Form from "../Form";
import { ICompany } from "../Interface";
import { postCompanies, putCompanies } from "../Services";

const Item: React.FC = () => {
  const company = useSelector<StateRedux, ICompany>((state) => state.company);

  const handleSubmitForm = useCallback(async (value: ICompany) => {
    // try {
    //   (await !value.createdAt) ? postCompanies(value) : putCompanies(value);
    //   console.log("terminou com sucesso");
    // } catch (error) {
    //   console.log("ocorreu algum erro com a solicitacao", error);
    //   console.log("comecou");
    //   console.log("terminou com error");
    // }
  }, []);

  return <Form handleSubmitForm={handleSubmitForm} initialValues={company} />;
};

export default Item;
