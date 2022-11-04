import { Link } from "react-scroll";
import styles from "./navbar.module.scss";

type NavItemProps = {
  text: string;
  href: string;
  active: boolean;
};

const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link
      className={styles["navbar__link"]}
      to={href}
      smooth={true}
      duration={500}
      offset={-50}
    >
      {text}
    </Link>
  );
};

export default NavItem;
