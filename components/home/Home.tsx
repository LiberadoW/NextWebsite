import styles from "./home.module.scss";
import { useEffect, useContext } from "react";
import { Link } from "react-scroll";
import logo from "../../public/images/whitelogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppContext } from "../../pages";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const globalValue = useContext(AppContext);

  return (
    <section id="home" className={styles.homepage}>
      <div className={styles.homepage__logoContainer} >
        <img className={styles.homepage__logo} src={logo.src} alt="" data-aos="fade-right" />
        <Link
        className={styles.navigation__link}
        to={"menu"}
        smooth={true}
        duration={500}
        offset={-3*globalValue.fontSize}
      >
        <button className={styles.homepage__scrollButton} data-aos="fade-left">
          Odkryj nasze menu
        </button>
      </Link>
      </div>

     
    </section>
  );
};

export default HomePage;
