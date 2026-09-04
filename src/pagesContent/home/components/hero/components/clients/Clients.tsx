import Image from "next/image";

import HeroClientsIcon from "@/components/ui/icons/hero/HeroClientsIcon";
import Typography from "@/components/ui/typography/Typography";

import { HeroClientImage, HeroClientsProps } from "./Clients.types";

import styles from "./Clients.module.scss";

function Clients({ data }: HeroClientsProps) {
   const { clientsCount, clientsLabel, clientsImage } = data;

   return (
      <div className={styles.clients}>
         <div className={styles.clientsImages}>
            {clientsImage.map((client: HeroClientImage) => (
               <div key={client.alt} className={styles.clientImage}>
                  <Image src={client.image} alt={client.alt} key={client.alt} />
               </div>
            ))}
         </div>

         <div className={styles.clientsText}>
            <div className={styles.clientsTextCount}>
               <Typography variant="heading-11" as="span">
                  {clientsCount}
               </Typography>

               <HeroClientsIcon />
            </div>

            <Typography variant="body-1" as="p">
               {clientsLabel}
            </Typography>
         </div>
      </div>
   );
}

export default Clients;
