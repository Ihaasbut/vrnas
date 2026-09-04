import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

export type OurTrustedPartnersData = BlockTitleData & {
   imageAlt: string;
   clients: OurTrustedPartnersClientsData[];
};

export type OurTrustedPartnersProps = {
   isCenter?: boolean;
};

export type OurTrustedPartnersClientsData = {
   name: string;
};
