import Image from "next/image";
import cn from "classnames";

import tableImage from "@/assets/images/our-pricing-man.webp";

import Tablo from "./components/aside/Tablo";
import Benefits from "./components/benefits/Benefits";
import { BENEFITS_DATA_CONFIG } from "./components/benefits/Benefits.consts";

import styles from "./PricingTable.module.scss";

function PricingTable() {
   return (
      <div className={cn(styles.tableWrapper, "border-white-fade")}>
         <div className={styles.left}>
            <Benefits data={BENEFITS_DATA_CONFIG} />
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
