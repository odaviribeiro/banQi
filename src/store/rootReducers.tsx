import { combineReducers } from "redux";

import { reducerCompany } from "./redux/Reducers";

const reducers = combineReducers({
  company: reducerCompany,
});

export { reducers };
