import { http } from "@/service";
import { ICompany } from "../Interface";
const URl = "/companies";

export const getCompanies = () => {
  return http.get<ICompany[]>(URl);
};
