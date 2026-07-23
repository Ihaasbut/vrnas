import { FaqData } from "@/components/sections/faq/Faq.types";
import { BlockTitleProps } from "@/components/titles/block-title/BlockTitle.types";
import { PageTitleData } from "@/components/titles/page-title/PageTitle.types";

export const FAQ_PAGE_TITLE: PageTitleData = {
   title: "Часто задаваемые вопросы",
   breadcrumbs: [
      { title: "Главная", link: "/" },
      { title: "Часто задаваемые вопросы", link: "/faq" },
   ],
};

export const FAQ_PAGE_CONFIG: FaqData & BlockTitleProps["data"] = {
   description:
      "Ответы на частые вопросы о нашей компании и стоимости VR-решений.",
   title: "Часто задаваемые вопросы",
   section: "FAQ",
};
