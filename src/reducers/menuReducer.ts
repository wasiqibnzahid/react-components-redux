import { UPDATE_MENU } from '../actions/types';
import { MenuItem } from '../types';
import { MenuAction } from '../actions/menuActions';

const initialState: MenuItem[] = [];

const menuReducer = (state = initialState, action: MenuAction): MenuItem[] => {
  switch (action.type) {
    case UPDATE_MENU:
      return [...action.payload];
    default:
      return state;
  }
};

export default menuReducer;