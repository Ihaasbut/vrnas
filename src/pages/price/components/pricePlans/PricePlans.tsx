import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import PricePlansCards from "./components/pricePlansCards/PricePlansCards";
import { PRICE_PLANS_CONFIG } from "./PricePlans.consts";

import styles from "./PricePlans.module.scss";

function PricePlans() {
   const { title, section, isCenter, description, pricePlansCards } =
      PRICE_PLANS_CONFIG;

   return (
      <Container>
         <section className={styles.pricePlansWrapper}>
            <div className={styles.pricePlansTitle}>
               <BlockTitle
                  title={title}
                  section={section}
                  isCenter={isCenter}
               />

               <Typography
                  variant="body-1"
                  as="p"
                  className={styles.pricePlansDescription}
               >
                  {description}
               </Typography>
            </div>

            <PricePlansCards pricePlansCards={pricePlansCards} />
         </section>
      </Container>
   );
}

export default PricePlans;
