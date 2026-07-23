import { FaqPage } from "../../Faq.types";

export type FaqFilterOption = {
   title: string;
   value: FaqPage;
};

export type FaqFilterProps = {
   activeFilter: FaqPage;
   onChange: (filter: FaqPage) => void;
};
