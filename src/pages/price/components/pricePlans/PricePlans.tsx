import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import PricePlansCards from "./components/pricePlansCards/PricePlansCards";
import { PricePlansCardsData } from "./components/pricePlansCards/PricePlansCards.types";
import { PRICE_PLANS_CONFIG } from "./PricePlans.consts";
import { PricePlansProps } from "./PricePlans.types";

import styles from "./PricePlans.module.scss";

function PricePlans({ isCenter }: PricePlansProps) {
   const { title, section, description, pricePlansCards } = PRICE_PLANS_CONFIG;

   const blockTitleData: BlockTitleData = {
      title,
      section,
   };

   const pricePlansCardsData: PricePlansCardsData = {
      pricePlansCards,
   };

   return (
      <Container>
         <section className={styles.pricePlansWrapper}>
            <div className={styles.pricePlansTitle}>
               <BlockTitle data={blockTitleData} isCenter={isCenter} />

               <Typography
                  variant="body-1"
                  as="p"
                  className={styles.pricePlansDescription}
               >
                  {description}
               </Typography>
            </div>

            <PricePlansCards data={pricePlansCardsData} />
         </section>
      </Container>
   );
}

export default PricePlans;
