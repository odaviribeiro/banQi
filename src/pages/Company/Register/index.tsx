import { NavigationPagesProps } from "@/routes";
import RouterNames from "@/routes/Internal";
import { StateRedux } from "@/store";
import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Form from "../Form";
import { ICompany } from "../Interface";
import { postCompanies, putCompanies } from "../Services";

const Item: React.FC = () => {
  const company = useSelector<StateRedux, ICompany>((state) => state.company);
  const { navigate } = useNavigation<NavigationPagesProps>();
  const handleSubmitForm = useCallback(async (value: ICompany) => {
    // try {
    //   (await !value.createdAt) ? postCompanies(value) : putCompanies(value);
    //   console.log("terminou com sucesso");
    // } catch (error) {
    //   console.log("ocorreu algum erro com a solicitacao", error);
    //   console.log("comecou");
    //   console.log("terminou com error");
    // }
    value.cnpj = value.cnpj.replace(/[^\d]+/g, "");
    await putCompanies(value)
      .then((res) => {
        console.log(res.data);
        navigate(RouterNames.Home);
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.data);
      });
  }, []);

  return <Form handleSubmitForm={handleSubmitForm} initialValues={company} />;
};

export default Item;
