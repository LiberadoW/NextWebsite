import styles from "./about.module.scss";
import aboutImg from "../../public/images/about.jpg";
import blackLogo from "../../public/images/blacklogo.png";
import {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useWindowWide } from "../../utils/windowResize";

const About = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return ( 
    <section id="about" className={styles.about}>
      <div className={styles.about__container}>
        <div
          className={`${styles.about__container1} ${styles.fadeLeft}`}
          data-aos="fade-right"
        >
          <div className={styles.about__text}>
            <div className={styles.about__smallLogoContainer}>
              <img
                className={styles.about__smallLogo}
                src={blackLogo.src}
                alt="logo"
              />
            </div>
            <h2 className={styles.about__title}>O nas</h2>
            <p>
              Lorem ipsum dolor sit amet. Sed eveniet molestiae eos ducimus
              maxime rem quaerat optio aut doloribus magni et obcaecati illo ex
              commodi omnis in quisquam quas. Ut dicta voluptate hic ullam
              voluptatem ut libero fuga ut magni explicabo est sint omnis. Non
              placeat velit aut unde deleniti non sint amet et sapiente minima
              qui tenetur modi ut repellat voluptatem ut galisum eius.
            </p>
            <p>
              Et quos internos ex iusto voluptatem est veritatis sequi sed
              praesentium reiciendis et quia facere et cupiditate modi. Sed
              labore natus in consequuntur labore in rerum porro id iste odio.
            </p>
            <p>
              Ut vero nihil est illo sequi non galisum dolorem ea repellat
              dolorem ea accusamus obcaecati. Quo eveniet dolor ea quas magnam
              ea officia explicabo in nostrum eaque sit enim dolorum. Et
              excepturi inventore est deleniti quidem non asperiores quas.
            </p>
          </div>
        </div>
        
        <div className={styles.about__container2} data-aos="fade-left">
          {useWindowWide(1023) && (
            <img className={styles.about__image} src={aboutImg.src} alt="" />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
