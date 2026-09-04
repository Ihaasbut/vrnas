import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import { TitleTextData } from "@/components/titleText/TitleText.types";

export type PrivacyData = BlockTitleData & {
   description: string;
   sections: TitleTextData[];
};
