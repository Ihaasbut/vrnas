import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import { BlockTitleProps } from "../titles/block-title/BlockTitle.types";

export type ImgTextBlockProps = BlockTitleProps & {
   children: ReactNode;
   image: StaticImageData;
   isReverse?: boolean;
   isReverseVideo?: boolean;
   bgClassName?: string;
};
