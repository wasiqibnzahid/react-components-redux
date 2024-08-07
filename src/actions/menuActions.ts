import { MenuItem } from "../types";
import { UPDATE_MENU } from "./types";

export const updateMenu = (menuItems: MenuItem[]) => ({
  type: UPDATE_MENU,
  payload: menuItems,
});
export type MenuAction = ReturnType<typeof updateMenu>;
