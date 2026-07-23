import { ReactNode } from "react";

export type AccordionEl = {
   id: string;
   title: string;
   content: ReactNode;
};

export type AccordionProps = {
   accordionElements: AccordionEl[];
   className?: string;
   isBg?: boolean;
};
