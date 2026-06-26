import styles from "./HomeContent.module.scss";
import Hero from "./components/hero/Hero";

function HomeContent() {
   return (
      <div className={styles.page}>
         <Hero />
      </div>
   );
}

export default HomeContent;
