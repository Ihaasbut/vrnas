import Typography from "@/components/typography/Typography";
import styles from "./Clients.module.scss";
import { HeroClientImage, HeroClientsProps } from "./Clients.types";
import Image from "next/image";
import HeroClientsIcon from "@/components/icons/hero/HeroClientsIcon";

function Clients({ clients }: HeroClientsProps) {
   const { clientsCount, clientsLabel, clientsImage } = clients;

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
