import Image from "next/image";

import Typography from "../ui/typography/Typography";

import { TeamWorkerData } from "./TeamWorker.types";

import styles from "./TeamWorker.module.scss";

function TeamWorker({ image, fullName, position }: TeamWorkerData) {
   return (
      <div className={styles.teamWorker}>
         <div className={styles.image}>
            <Image src={image} alt={fullName} fill className={styles.img} />

            <div className={styles.text}>
               <Typography variant="heading-7" as="h5">
                  {fullName}
               </Typography>

               <Typography variant="heading-12" as="span">
                  {position}
               </Typography>
            </div>
         </div>
      </div>
   );
}

export default TeamWorker;
