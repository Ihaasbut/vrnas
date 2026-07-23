import { ListEl } from "@/components/list/List.types";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

export type AboutUsData = BlockTitleData & {
   text: string;
   buttonLabel: string;
   listItems: ListEl[];
};
