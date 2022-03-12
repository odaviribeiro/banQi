import { ICompany } from "@/pages/Company/Interface";
import { createStore } from "redux";
import { reducers } from "./rootReducers";

export interface StateRedux {
  company: ICompany;
}

const store = createStore(reducers);

export default store;
