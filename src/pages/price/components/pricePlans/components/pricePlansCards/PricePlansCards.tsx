"use client";

import cn from "classnames";

import Button from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";

import Features from "./components/features/Features";
import { FeaturesData } from "./components/features/Features.types";
import { PricePlanCardEl, PricePlansCardsProps } from "./PricePlansCards.types";

import styles from "./PricePlansCards.module.scss";

function PricePlansCards({ data }: PricePlansCardsProps) {
   const { pricePlansCards } = data;

   return (
      <div className={styles.pricePlansCards}>
         {pricePlansCards.map((pricePlanCard: PricePlanCardEl) => {
            const currentButton = pricePlanCard.isMain ? "fill" : "ghost";

            const featuresData: FeaturesData = {
               features: pricePlanCard.features,
            };

            return (
               <div
                  key={pricePlanCard.title}
                  className={cn(
                     styles.pricePlanCard,
                     pricePlanCard.isMain && styles.main,
                  )}
               >
                  <Typography variant="heading-9">
                     {pricePlanCard.title}
                  </Typography>

                  <div className={styles.pricePlanCardPrice}>
                     <Typography variant="heading-2">
                        {pricePlanCard.price}
                     </Typography>

                     <Typography variant="body-1" as={"span"}>
                        {pricePlanCard.period}
                     </Typography>
                  </div>

                  <Typography variant="body-3" as={"span"}>
                     {pricePlanCard.description}
                  </Typography>

                  <Features data={featuresData} />

                  <Button
                     variant={currentButton}
                     onClick={() => {}}
                     className={styles.pricePlanCardButton}
                  >
                     <Typography variant="button-1" as="span">
                        {pricePlanCard.buttonText}
                     </Typography>
                  </Button>
               </div>
            );
         })}
      </div>
   );
}

export default PricePlansCards;
