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
  address: {
    city: "",
    complement: "",
    neighborhood: "",
    number: 0,
    state: "",
    street: "",
    zip: 0,
  },
};

const reducerCompany = (state = initial_state, action: Action) => {
  switch (action.type) {
    case actionsTypesCompany.SET_COMPANY:
      return action.company;
    default:
      return state;
  }
};

export { reducerCompany };
