import WindowScroll from "./components/windowScroll/WindowScroll";

import styles from "./ContentArticles.module.scss";

function ContentArticles() {
   return (
      <div className={styles.contentArticles}>
         <WindowScroll />
      </div>
   );
}

export default ContentArticles;
