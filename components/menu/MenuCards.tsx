import * as React from "react";
import styles from "./menu.module.scss";
import { useContext } from "react";
import { MenuContext } from "./Menu";
import MenuItem from "./MenuItem";

export interface MenuObject {
  name: string;
  price: number;
  ingredients: string[];
}

export interface MenuInterface {
  przystawki: MenuObject[];
  "dania główne": MenuObject[];
  desery: MenuObject[];
  napoje: MenuObject[];
}

const MENU_ITEMS: MenuInterface = {
  przystawki: [
    {
      name: "Lorem ipsum",
      price: 15,
      ingredients: [
        "Lorem",
        "fugiat",
        "reprehenderit",
        "anim",
        "pariatur",
        "tempor",
      ],
    },
    {
      name: "Lorem ipsum",
      price: 15,
      ingredients: [
        "Lorem",
        "fugiat",
        "reprehenderit",
        "anim",
        "pariatur",
        "tempor",
      ],
    },
    {
      name: "Lorem ipsum",
      price: 15,
      ingredients: [
        "Lorem",
        "fugiat",
        "reprehenderit",
        "anim",
        "pariatur",
        "tempor",
      ],
    },
    {
      name: "Lorem ipsum",
      price: 15,
      ingredients: [
        "Lorem",
        "fugiat",
        "reprehenderit",
        "anim",
        "pariatur",
        "tempor",
      ],
    },
    {
      name: "Lorem ipsum",
      price: 15,
      ingredients: [
        "Lorem",
        "fugiat",
        "reprehenderit",
        "anim",
        "pariatur",
        "tempor",
      ],
    },
    {
      name: "Lorem ipsum",
      price: 15,
      ingredients: [
        "Lorem",
        "fugiat",
        "reprehenderit",
        "anim",
        "pariatur",
        "tempor",
      ],
    },
  ],
  "dania główne": [
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
  desery: [
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
  napoje: [
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
      {MENU_ITEMS[menu.menuTab as keyof MenuInterface].map(
        (menuItem, index) => {
          return <MenuItem key={index} menuItem={menuItem} />;
        }
      )}
    </div>
  );
};

export default MenuCards;
