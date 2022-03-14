import { http } from "@/service";
import { ICompany } from "../Interface";
const URl = "/companies/";

export const getCompanies = () => {
  return http.get<ICompany[]>(URl);
};

export const postCompanies = (value: ICompany) => {
  return http.post<ICompany>(URl, value);
};

export const putCompanies = (value: ICompany) => {
  return http.put<ICompany>(URl, value);
};
