import { BlockTitleProps } from "@/components/titles/block-title/BlockTitle.types";

import { PricePlansCardsProps } from "./components/pricePlansCards/PricePlansCards.types";

export type PricePlansProps = BlockTitleProps & {
   description: string;
   pricePlansCards: PricePlansCardsProps["pricePlansCards"];
};
