import * as React from "react";
import styles from "./menu.module.scss";
import { useContext } from "react";
import { MenuContext } from "./Menu";
import { SwitchTransition, CSSTransition } from "react-transition-group";

interface Menu {
  food: {
    name: string;
    price: number;
    ingredients: string[];
  }[];
  drinks: {
    name: string;
    price: number;
    ingredients: string[];
  }[];
  desserts: {
    name: string;
    price: number;
    ingredients: string[];
  }[];
  coffee: {
    name: string;
    price: number;
    ingredients: string[];
  }[];
}

const MENU_ITEMS: Menu = {
  food: [
    {
      name: "Rosół",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
    {
      name: "Rosół",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
  ],
  drinks: [
    {
      name: "Cola",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
    {
      name: "Rosół",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
  ],
  desserts: [
    {
      name: "Kajmak",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
    {
      name: "Rosół",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
  ],
  coffee: [
    {
      name: "Czarna",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
    {
      name: "Rosół",
      price: 10,
      ingredients: ["kurczak", "pietruszka", "makaron"],
    },
  ],
};

const MenuCards = () => {
  const menu = useContext(MenuContext);

  return (
    <div className={`${styles.menu__tab} ${styles[menu.menuTab]}`}>
      {MENU_ITEMS[menu.menuTab as keyof Menu].map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

export default MenuCards;
