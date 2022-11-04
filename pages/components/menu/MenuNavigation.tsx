import * as React from "react";
import MenuButton from "./MenuButton";
import styles from "./menu.module.scss";

const MENU_SECTIONS = ["food", "drinks", "desserts", "coffee"];

const MenuNavigation = () => {
  return (
    <div>
      <ul className={styles.menu__menuNav}>
        {MENU_SECTIONS.map((section) => {
          return (
            <li key={section}>
              <MenuButton value={section} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuNavigation;
