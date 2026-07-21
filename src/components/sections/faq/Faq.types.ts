import { AccordionProps } from "@/components/accordion/Accordion.types";
import { BlockTitleProps } from "@/components/titles/block-title/BlockTitle.types";

export type FaqProps = BlockTitleProps & {
   description: string;
   accordionElements: AccordionProps["accordionElements"];
   withArcGlow?: boolean;
};
