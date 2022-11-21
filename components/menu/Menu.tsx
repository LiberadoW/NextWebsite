import styles from "./menu.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import MenuNavigation from "./MenuNavigation";
import MenuCards from "./MenuCards";
import AOS from "aos";
import "aos/dist/aos.css";

export type MenuContent = {
  menuTab: string;
  setMenuTab: React.Dispatch<React.SetStateAction<string>>;
};

export const MenuContext = React.createContext<MenuContent>({
  menuTab: "przystawki",
  setMenuTab: () => {},
});

const Menu = () => {
  const [menuTab, setMenuTab] = useState("przystawki");
  const menuValue = { menuTab, setMenuTab };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="menu" className={styles.menu} data-aos="fade-right">
      <h2 className={styles.menu__title}>Menu</h2>
      <div className={styles.menu__container}>
        <MenuContext.Provider value={menuValue}>
          <MenuNavigation />
          <MenuCards />
        </MenuContext.Provider>
      </div>
    </section>
  );
};

export default Menu;
