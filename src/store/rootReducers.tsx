import { combineReducers } from "redux";

import { reducerCompany } from "./redux/Company/Reducers";

const reducers = combineReducers({
  data: reducerCompany,
});

export { reducers };
