import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import styles from "./navbar.module.scss";

type NavItemProps = {
  text: string;
  href: string;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavItem = ({ text, href, setNavOpen }: NavItemProps) => {
  const [fontSize, setFontSize] = useState(0);

  useEffect(() => {
    setFontSize(
      parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))
    );
  }, []);

  const closeMenu = () => {
    setNavOpen(false);
  };
  return (
    <Link
      className={styles.navigation__link}
      to={href}
      smooth={true}
      duration={500}
      offset={-fontSize * 3}
      onClick={closeMenu}
    >
      <span className={styles.navigation__text}>{text}</span>
    </Link>
  );
};

export default NavItem;
