import { SET_CURRENT_APP, UPDATE_SHARED_DATA } from "../actions/types";
import { SharedData } from "../types";
import { AppAction } from "../actions/appActions";

interface AppCommunicationState {
  currentApp: string | null;
  sharedData: SharedData;
}

const initialState: AppCommunicationState = {
  currentApp: null,
  sharedData: {
    counter: 0,
  },
};

const appCommunicationReducer = (
  state = initialState,
  action: AppAction
): AppCommunicationState => {
  switch (action.type) {
    case SET_CURRENT_APP:
      return {
        ...state,
        currentApp: action.payload,
      };
    case UPDATE_SHARED_DATA:
      return {
        ...state,
        sharedData: {
          ...state.sharedData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default appCommunicationReducer;
