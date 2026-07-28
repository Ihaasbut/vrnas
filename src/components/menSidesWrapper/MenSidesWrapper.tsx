import Image from "next/image";

import manImage from "@/assets/images/our-pricing-man.webp";

import { MenSidesWrapperProps } from "./MenSidesWrapper.types";

import styles from "./MenSidesWrapper.module.scss";

function MenSidesWrapper({ children }: MenSidesWrapperProps) {
   return (
      <div className={styles.menSidesWrapperWrapper}>
         <div className={styles.menSidesInner}>
            {children}

            <div className={styles.menSidesSideLeft}>
               <Image src={manImage} alt="Men Sides Side Left" />
            </div>

            <div className={styles.menSidesSideRight}>
               <Image src={manImage} alt="Men Sides Side Right" />
            </div>
            <div className={styles.menSidesSideBottom}></div>
         </div>
      </div>
   );
}

export default MenSidesWrapper;
