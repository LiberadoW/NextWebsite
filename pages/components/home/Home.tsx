import styles from "./home.module.scss";
import { useEffect } from "react";
import logo from "../../images/whitelogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="home" className={styles.homepage}>
      <div className={styles.homepage__logoContainer} data-aos="fade-up">
       <img className={styles.homepage__logo} src={logo.src} alt="" />
      </div>
      <button className={styles.homepage__scrollButton}>
        <svg viewBox="0 0 240 240" xmlns="https://www.svgrepo.com/show/97299/down-arrow.svg">

        </svg>
      </button>
    </section>
  );
};

export default HomePage;
