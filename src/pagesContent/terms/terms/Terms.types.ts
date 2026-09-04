import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import { TitleTextData } from "@/components/titleText/TitleText.types";

export type TermsData = BlockTitleData & {
   description: string;
   sections: TitleTextData[];
};
