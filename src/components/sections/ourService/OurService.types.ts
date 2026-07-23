import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

export type OurServiceData = BlockTitleData & {
   text: string;
};

export type OurServiceProps = {
   withArcGlow?: boolean;
};
