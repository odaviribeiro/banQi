import { ICompany } from "@/pages/Company/Interface";
import { actionsTypesCompany } from "../Const";
import { ActionCompany, initial_company } from "../Reducers";

export const companyReduce = (company: ICompany): ActionCompany => {
  return {
    type: actionsTypesCompany.SET_COMPANY,
    data: { company },
  };
};

export const companyDeleteReduce = (): ActionCompany => {
  return {
    type: actionsTypesCompany.DELETE_COMPANY,
    data: { company: initial_company },
  };
};

export const companyReloadReduce = (): ActionCompany => {
  return {
    type: actionsTypesCompany.RELOAD_COMPANY,
    data: { company: initial_company },
  };
};
