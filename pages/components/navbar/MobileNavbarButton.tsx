import * as React from "react";
import styles from "./navbar.module.scss";

interface Props {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navOpen: boolean;
}

const MobileNavbarButton = ({ setNavOpen, navOpen }: Props) => {
  const handleClick = () => {
    setNavOpen((prevState) => !prevState);
  };
  return (
    <div
      className={`${styles.navigation__mobileNavButton} ${
        navOpen ? styles["navigation__mobileNavButton--open"] : ""
      } `}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MobileNavbarButton;
