import Button from "@/components/button/Button";
import styles from "./BurgerMenu.module.scss";

function BurgerMenu() {
   return (
      <Button variant="ghost" onClick={() => {}} isSkipPadding>
         <div className={styles.burgerMenu}>
            <div className={styles.lines}>
               <span className={styles.line}></span>
               <span className={styles.line}></span>
               <span className={styles.line}></span>
            </div>
         </div>
      </Button>
   );
}

export default BurgerMenu;
