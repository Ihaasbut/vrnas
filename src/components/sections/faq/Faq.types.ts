import { AccordionEl } from "@/components/accordion/Accordion.types";
import { BlockTitleProps } from "@/components/titles/block-title/BlockTitle.types";

export type FaqPage = "faq" | "price" | "about";
export type FaqQuestionPage = Exclude<FaqPage, "faq">;

export type FaqQuestion = AccordionEl & {
   pageQuestion: FaqQuestionPage;
};

export type FaqProps = BlockTitleProps & {
   description: string;
   page: FaqPage;
   withArcGlow?: boolean;
};
