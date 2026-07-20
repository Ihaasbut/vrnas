import BlockTitle from "../titles/block-title/BlockTitle";
import ArcGlow from "../ui/arc-glow/ArcGlow";
import Container from "../ui/container/Container";
import Typography from "../ui/typography/Typography";

import PricingTable from "./components/pricingTable/PricingTable";
import { OUR_PRICING_CONFIG } from "./OurPricing.consts";
import { OurPricingProps } from "./OurPricing.types";

import styles from "./OurPricing.module.scss";

function OurPricing({ withArcGlow }: OurPricingProps) {
   return (
      <section className={styles.ourPricingWrapper}>
         <Container>
            <div className={styles.ourPricingInner}>
               <div className={styles.titleWrapper}>
                  <BlockTitle
                     title={OUR_PRICING_CONFIG.title}
                     section={OUR_PRICING_CONFIG.sectionTitle}
                  />

                  <Typography
                     variant="body-1"
                     as="p"
                     className={styles.titleDescription}
                  >
                     {OUR_PRICING_CONFIG.text}
                  </Typography>
               </div>

               <PricingTable />
            </div>
         </Container>

         {withArcGlow && <ArcGlow className={styles.withArcGlow} />}

         <ArcGlow className={styles.arcGlow} />
      </section>
   );
}

export default OurPricing;
