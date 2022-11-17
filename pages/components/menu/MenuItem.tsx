import * as React from "react";
import styles from "./menu.module.scss";
import { MenuObject } from "./MenuCards";
import foodPic from "../../images/foodpicture.jpg";

interface MenuItemProps {
  menuItem: MenuObject;
}

const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <div className={styles.menu__item}>
      <img className={styles.menu__itemImage} src={foodPic.src} alt="food" />
      <div className={styles.menu__itemText}>
        <h4 className={styles.menu__itemTitle}>{menuItem.name}</h4>
        <p className={styles.menu__itemDescription}>
          {menuItem.ingredients.join(", ")}
        </p>
      </div>
      <div className={styles.menu__itemPrice}>{`${menuItem.price} zł`}</div>
    </div>
  );
};

export default MenuItem;
