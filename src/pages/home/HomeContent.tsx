import AboutUs from "./components/aboutUs/AboutUs";
import Hero from "./components/hero/Hero";

import styles from "./HomeContent.module.scss";

function HomeContent() {
   return (
      <div className={styles.page}>
         <Hero />

         <AboutUs />
      </div>
   );
}

export default HomeContent;
