import Header from "../components/header/Header";
import HomePage from "../components/home/Home";
import About from "../components/about/About";
import Menu from "../components/menu/Menu";
import Gallery from "../components/gallery/Gallery";
import Contact from "../components/contact/Contact";
import styles from "./main.module.scss";
import { createContext } from "react";

interface AppContextInterface {
  fontSize: number;
}

export const AppContext = createContext<AppContextInterface>({fontSize:0});

const value: AppContextInterface = {
  fontSize:
    typeof document !== "undefined"
      ? parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))
      : 0,
};

const Home = () => {
  return (
    <>
      <AppContext.Provider value={value}>
        <div className={styles.app}>
          <Header />
          <main className={styles.content}>
            <HomePage />
            <About />
            <Menu />
            <Gallery />
            <Contact/>
          </main>
        </div>

        <div className="loader"></div>
      </AppContext.Provider>
    </>
  );
};

export default Home;
