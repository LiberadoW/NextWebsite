import styles from "./header.module.scss";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Burgerado
      </div>
      <Navbar /> 
    </header>
  );
};

export default Header;
