import * as React from "react";
import { useState } from "react";
import styles from "./menu.module.scss";
import { MenuObject } from "./MenuCards";
import foodPic from "../../public/images/foodpicture.jpg";

interface MenuItemProps {
  menuItem: MenuObject;
}

const MenuItem = ({ menuItem }: MenuItemProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => {
    setOpenModal(!openModal);
  };

  console.log(menuItem.name)

  return (
    <div className={styles.menu__item}>
      <img
        onClick={handleModalClick}
        className={styles.menu__itemImage}
        src={foodPic.src}
        alt="food"
      />
      <div className={styles.menu__itemText}>
        <h4 className={styles.menu__itemTitle}>{menuItem.name}</h4>
        <p className={styles.menu__itemDescription}>
          {menuItem.ingredients.join(", ")}
        </p>
      </div>
      <div className={styles.menu__itemPrice}>{`${menuItem.price} zł`}</div>
      {openModal && (
        <div className={styles.menu__modal}>
          <div className={styles.menu__modalContainer}>
            <button
              className={styles.menu__modalButton}
              onClick={handleModalClick}
            >
              X
            </button>
            <img className={styles.menu__modalImage} src={foodPic.src} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
