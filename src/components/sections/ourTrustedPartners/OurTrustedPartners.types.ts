import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

export type OurTrustedPartnersData = BlockTitleData & {
   imageAlt: string;
};

export type OurTrustedPartnersProps = {
   isCenter?: boolean;
};
