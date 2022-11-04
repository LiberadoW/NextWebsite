import styles from "./menu.module.scss";
import React from "react";
import { useState } from "react";
import MenuNavigation from "./MenuNavigation";
import MenuCards from "./MenuCards";

export type MenuContent = {
  menuTab: string;
  setMenuTab: React.Dispatch<React.SetStateAction<string>>;
};

export const MenuContext = React.createContext<MenuContent>({
  menuTab: "food",
  setMenuTab: () => {},
});

const Menu = () => {
  const [menuTab, setMenuTab] = useState("food");
  const menuValue = { menuTab, setMenuTab };

  return (
    <section id="menu" className={styles.menu}>
      <div>Menu</div>
      <div className={styles.menu__mainMenu}>
        <MenuContext.Provider value={menuValue}>
          <MenuNavigation />
          <MenuCards />
        </MenuContext.Provider>
      </div>
    </section>
  );
};

export default Menu;
