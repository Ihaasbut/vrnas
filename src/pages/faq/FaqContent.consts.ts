import { FaqProps } from "@/components/sections/faq/Faq.types";
import { PageTitleProps } from "@/components/titles/page-title/PageTitle.types";

export const FAQ_PAGE_TITLE: PageTitleProps = {
   title: "Часто задаваемые вопросы",
   breadcrumbs: [
      { title: "Главная", link: "/" },
      { title: "Часто задаваемые вопросы", link: "/faq" },
   ],
};

export const FAQ_PAGE_CONFIG: FaqProps = {
   title: "Часто задаваемые вопросы",
   section: "FAQ",
   isCenter: true,
   description:
      "Ответы на частые вопросы о нашей компании и стоимости VR-решений.",
   page: "faq",
};
