import { AccordionProps } from "../accordion/Accordion.types";
import { ImgTextBlockProps } from "../ImgTextBlock/ImgTextBlock.types";

export type WhyChooseUsData = Omit<ImgTextBlockProps, "children"> & {
   accordionElements: AccordionProps["accordionElements"];
};

export type WhyChooseUsProps = {
   data: WhyChooseUsData;
};
