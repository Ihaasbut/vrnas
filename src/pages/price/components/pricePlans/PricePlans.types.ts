import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

import { PricePlansCardsData } from "./components/pricePlansCards/PricePlansCards.types";

export type PricePlansData = BlockTitleData & {
   description: string;
   pricePlansCards: PricePlansCardsData["pricePlansCards"];
};

export type PricePlansProps = {
   isCenter?: boolean;
};
