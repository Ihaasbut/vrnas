import { StaticImageData } from "next/image";

import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import { TitleTextData } from "@/components/titleText/TitleText.types";

export type ContentData = BlockTitleData & {
   sections: TitleTextData[];
   buttonText: string;
   image: StaticImageData;
   imageAlt: string;
};
