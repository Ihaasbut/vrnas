import { ImgTextBlockProps } from "@/components/ImgTextBlock/ImgTextBlock.types";
import { ListProps } from "@/components/list/List.types";

export type AboutUsProps = Omit<ImgTextBlockProps, "children"> & {
   text: string;
   buttonLabel: string;
   listItems: ListProps["items"];
};
