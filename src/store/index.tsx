import { createStore } from "redux";
import { IDataCompany } from "./redux/Company/Reducers";
import { reducers } from "./rootReducers";

export interface StateRedux {
  data: IDataCompany;
}

const store = createStore(reducers);

export default store;
