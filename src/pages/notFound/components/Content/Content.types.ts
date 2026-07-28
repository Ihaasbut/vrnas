import { StaticImageData } from "next/image";

import { ListEl } from "@/components/list/List.types";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

export type ContentData = BlockTitleData & {
   intro: string;
   reasons: ListEl[];
   optionsIntro: string;
   options: ListEl[];
   footer: string;
   buttonText: string;
   image: StaticImageData;
   imageAlt: string;
};
