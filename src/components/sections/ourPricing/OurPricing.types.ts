import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

export type OurPricingData = BlockTitleData & {
   text: string;
};

export type OurPricingProps = {
   withArcGlow?: boolean;
};
