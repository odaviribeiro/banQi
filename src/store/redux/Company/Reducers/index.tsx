import { ICompany } from "@/pages/Company/Interface";
import { actionsTypesCompany } from "../Const";

export interface IDataCompany {
  company: ICompany;
  loading?: boolean;
}

export interface ActionCompany {
  type: string;
  data: IDataCompany;
}

export const initial_company: ICompany = {
  cnpj: "",
  description: "",
  logo: "",
  name: "",
  id: "",
  address: {
    city: "",
    complement: "",
    neighborhood: "",
    number: "",
    state: "",
    street: "",
    zip: "",
  },
};

const initial_state: IDataCompany = {
  company: initial_company,
  loading: false,
};

const reducerCompany = (
  state = initial_state,
  action: ActionCompany
): IDataCompany => {
  switch (action.type) {
    case actionsTypesCompany.SET_COMPANY:
      return { company: action.data.company, loading: state.loading };
    case actionsTypesCompany.DELETE_COMPANY:
      return { company: initial_company, loading: state.loading };
    case actionsTypesCompany.RELOAD_COMPANY:
      return { company: initial_company, loading: !state.loading };

    default:
      return state;
  }
};

export { reducerCompany };
