import useSplashLoading from "../../../hooks/SplashLoading";
import { NavigationPagesProps } from "@/routes";
import RouterNames from "@/routes/Internal";
import { StateRedux } from "@/store";
import { cnpjRegex } from "@/utils/Regex/Cnpj";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Form from "../Form";
import { ICompany } from "../Interface";
import { postCompanies, putCompanies } from "../Services";

const Item: React.FC = () => {
  const { setLoadingState } = useSplashLoading();

  const company = useSelector<StateRedux, ICompany>((state) => state.company);
  const { navigate } = useNavigation<NavigationPagesProps>();

  const handleSubmitForm = useCallback(async (value: ICompany) => {
    setLoadingState("loading");
    value.cnpj = value.cnpj.replace(/[^\d]+/g, "");
    try {
      (await !value.id) ? postCompanies(value) : putCompanies(value);
      setLoadingState("idle");
      navigate(RouterNames.Home);
    } catch (error) {
      setLoadingState("idle");
    }
  }, []);

  const formatCnpj = useCallback((company: ICompany) => {
    company.cnpj = cnpjRegex(company.cnpj);
    return company;
  }, []);

  return (
    <Form
      handleSubmitForm={handleSubmitForm}
      initialValues={formatCnpj(company)}
    />
  );
};

export default Item;
