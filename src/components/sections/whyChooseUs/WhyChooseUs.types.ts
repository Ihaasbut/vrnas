import { AccordionEl } from "@/components/accordion/Accordion.types";
import { ImgTextBlockProps } from "@/components/ImgTextBlock/ImgTextBlock.types";

export type WhyChooseUsProps = Omit<ImgTextBlockProps, "children"> & {
   data: WhyChooseUsData;
};

export type WhyChooseUsData = {
   title: string;
   section: string;
   accordionElements: AccordionEl[];
};
