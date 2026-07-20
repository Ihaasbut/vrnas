import Image from "next/image";
import cn from "classnames";

import tableImage from "@/assets/images/our-pricing-man.webp";

import Benefits from "./components/benefits/Benefits";
import { BENEFITS_DATA_CONFIG } from "./components/benefits/Benefits.consts";
import Tablo from "./components/tablo/Tablo";

import styles from "./PricingTable.module.scss";

function PricingTable() {
   return (
      <div className={cn(styles.tableWrapper, "border-white-fade")}>
         <div className={styles.left}>
            <Benefits benefits={BENEFITS_DATA_CONFIG.benefits} />
         </div>

         <div className={styles.right}>
            <div className={styles.imageWrapper}>
               <Image src={tableImage} alt="VR pricing" />
            </div>

            <Tablo className={styles.tablo} />
         </div>
      </div>
   );
}

export default PricingTable;
