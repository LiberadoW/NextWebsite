import styles from "./navbar.module.scss";
import NavItem from "./NavItem";
import React, { useState } from "react";

const NAV = [
  { text: "Strona główna", href: "home" },
  { text: "O nas", href: "about" },
  { text: "Menu", href: "menu" },
  { text: "Kontakt", href: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <nav className={styles.navbar}>
      {NAV.map((link, index) => {
        return (
          <div
            onClick={() => {
              setActiveIndex(index);
            }}
            key={index}
            className={styles["navbar__item"]}
          >
            <NavItem
              active={activeIndex === index}
              text={link.text}
              href={link.href}
            />
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
