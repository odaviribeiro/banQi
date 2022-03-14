import { ICompany } from "@/pages/Company/Interface";
import { actionsTypesCompany } from "../Const";

interface Action {
  type: string;
  company: ICompany;
}

const initial_state: ICompany = {
  cnpj: "",
  description: "",
  logo: "",
  name: "",
  revenue: 0,
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

const reducerCompany = (state = initial_state, action: Action) => {
  switch (action.type) {
    case actionsTypesCompany.SET_COMPANY:
      return action.company;
    case actionsTypesCompany.DELETE_COMPANY:
      return initial_state;
    default:
      return state;
  }
};

export { reducerCompany };
