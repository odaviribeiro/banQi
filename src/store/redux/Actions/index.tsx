import { ICompany } from "@/pages/Company/Interface";
import { actionsTypesCompany } from "../Const";

export const companyReduce = (company: ICompany) => {
  return {
    type: actionsTypesCompany.SET_COMPANY,
    company: company,
  };
};
