import styles from "./navbar.module.scss";
import NavItem from "./NavItem";
import React, { useState } from "react";
import MobileNavbarButton from "./MobileNavbarButton";
import { useWindowWide } from "../../utils/windowResize";

const NAV = [
  { text: "Strona główna", href: "home" },
  { text: "O nas", href: "about" },
  { text: "Menu", href: "menu" },
  { text: "Galeria", href: "gallery" },
  { text: "Kontakt", href: "contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      <ul
        className={`${
          useWindowWide(939)
            ? styles.navigation__navbar
            : styles.navigation__mobileNavbar
        } ${navOpen ? styles["navigation__mobileNavbar--showMenu"] : ""}`}
      >
        {NAV.map((link, index) => {
          return (
            <li key={index} className={styles["navigation__item"]}>
              <NavItem
                text={link.text}
                href={link.href}
                setNavOpen={setNavOpen}
              />
            </li>
          );
        })}
        <li className={styles.navigation__item}><button className={styles.navigation__reservationButton}>Rezerwuj</button></li>
      </ul>
      {!useWindowWide(939) ? (
        <MobileNavbarButton setNavOpen={setNavOpen} navOpen={navOpen} />
      ) : null}
    </nav>
  );
};

export default Navbar;
