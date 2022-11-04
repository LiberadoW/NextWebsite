import * as React from "react";
import { useContext } from "react";
import { MenuContext } from "./Menu";
import styles from "./menu.module.scss";

type Props = {
  value: string;
};

const MenuButton = ({ value }: Props) => {
  const menu = useContext(MenuContext);
  return (
    <button
      className={styles.menu__button}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        menu.setMenuTab(e.currentTarget.value)
      }
      value={value}
    >
      {value}
    </button>
  );
};

export default MenuButton;
