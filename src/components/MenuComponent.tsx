import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMenu } from "../actions/menuActions";
import MenuConfigLoader from "../utils/MenuConfigLoader";
import { AppState, MenuItem } from "../types";

const MenuComponent: React.FC = () => {
  const menu = useSelector<AppState, MenuItem[]>((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMenu = async () => {
      // Defaults when no app is loaded - will be overwritten in most cases by the app being mounted
      const config = MenuConfigLoader.load();
      dispatch(updateMenu(config));
    };
    loadMenu();
  }, [dispatch]);

  return (
    <nav>
      {menu.map((item) => (
        <a key={item.id} href={item.link}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default MenuComponent;
