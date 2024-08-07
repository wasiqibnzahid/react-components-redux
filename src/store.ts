import { createStore, combineReducers } from "redux";

import menuReducer from "./reducers/menuReducer";
import appCommunicationReducer from "./reducers/appCommunicationReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  appCommunication: appCommunicationReducer,
});

const store = createStore(rootReducer);

export default store;
