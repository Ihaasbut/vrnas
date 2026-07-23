import { ReactNode } from "react";

export type AccordionEl = {
   id: string;
   title: string;
   content: ReactNode;
};

export type AccordionData = {
   accordionElements: AccordionEl[];
};

export type AccordionProps = {
   data: AccordionData;
   className?: string;
   isBg?: boolean;
};
