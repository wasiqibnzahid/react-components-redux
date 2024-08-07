import { MenuItem } from "../types";

class MenuConfigLoader {
  static load(): MenuItem[] {
    return [
      { id: "home", label: "Home", link: "/" },
      { id: "about", label: "About", link: "/about" },
      { id: "contact", label: "Contact", link: "/contact" },
    ];
  }
}

export default MenuConfigLoader;
