import RouterNames from "@/routes/Internal";
import { StateRedux } from "@/store";
import { cnpjRegex } from "@/utils/Regex/Cnpj";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form";
import { ICompany } from "../Interface";
import { postCompanies, putCompanies } from "../Services";
import { companyReloadReduce } from "@/store/redux/Company/Actions";
import { IDataCompany } from "@/store/redux/Company/Reducers";
import useSplashLoading from "@/hooks/SplashLoading";

const Item: React.FC = () => {
  const { setLoadingState } = useSplashLoading();

  const dataCompany = useSelector<StateRedux, IDataCompany>(
    (state) => state.data
  );
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleSubmitForm = useCallback(async (value: ICompany) => {
    setLoadingState("loading");
    value.cnpj = value.cnpj.replace(/[^\d]+/g, "");
    try {
      !value.id ? await postCompanies(value) : await putCompanies(value);
      setLoadingState("idle");
      navigate(RouterNames.Home as never);
    } catch (error) {
      setLoadingState("idle");
    } finally {
      dispatch(companyReloadReduce());
    }
  }, []);

  const formatCnpj = useCallback((company: ICompany) => {
    company.cnpj = cnpjRegex(company.cnpj);
    return company;
  }, []);

  return (
    <Form
      handleSubmitForm={handleSubmitForm}
      initialValues={formatCnpj(dataCompany.company)}
    />
  );
};

export default Item;
