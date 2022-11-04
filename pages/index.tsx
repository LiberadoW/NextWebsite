import Header from "./components/header/Header";
import HomePage from "./components/home/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import styles from "./main.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.app}>
        <Header />

        <main className={styles.content}>
          <HomePage />
          <About />
          <Menu />
          <section id="contact">CONTACT</section>
        </main>
      </div>

      <div className="loader"></div>
    </>
  );
};

export default Home;
