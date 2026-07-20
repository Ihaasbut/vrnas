import { AccordionProps } from "@/components/accordion/Accordion.types";
import { ImgTextBlockProps } from "@/components/ImgTextBlock/ImgTextBlock.types";

export type WhyChooseUsData = Omit<ImgTextBlockProps, "children"> & {
   accordionElements: AccordionProps["accordionElements"];
};

export type WhyChooseUsProps = {
   data: WhyChooseUsData;
};
