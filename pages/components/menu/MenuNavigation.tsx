import * as React from "react";
import MenuButton from "./MenuButton";
import styles from "./menu.module.scss";
import { useContext } from "react";
import { MenuContext } from "./Menu";

const MENU_SECTIONS = ["przystawki", "dania główne", "desery", "napoje"];

const MenuNavigation = () => {
  const menu = useContext(MenuContext);
  console.log(menu);
  return (
    <ul className={styles.menu__menuNav}>
      {MENU_SECTIONS.map((section) => {
        return (
          <li
            key={section}
            className={`${styles.menu__menuNavItem} ${
              menu.menuTab === section ? styles["menu__menuNav--active"] : ""
            }`}
          >
            <MenuButton value={section} />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuNavigation;
