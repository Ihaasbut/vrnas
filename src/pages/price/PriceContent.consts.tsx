import { FaqData } from "@/components/sections/faq/Faq.types";
import { WhyChooseUsData } from "@/components/sections/whyChooseUs/WhyChooseUs.types";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import { PageTitleData } from "@/components/titles/page-title/PageTitle.types";
import Typography from "@/components/ui/typography/Typography";

export const PRICE_PAGE_TITLE: PageTitleData = {
   title: "Тарифы",
   breadcrumbs: [
      { title: "Главная", link: "/" },
      { title: "Тарифы", link: "/price" },
   ],
};

export const WHY_CHOOSE_US_DATA_CONFIG_2: WhyChooseUsData = {
   title: "Почему мы",
   section: "Почему мы",
   accordionElements: [
      {
         id: "1",
         title: "Опытная и увлеченная команда",
         content: (
            <Typography variant="body-3" as="p">
               Наша команда объединяет специалистов, которые глубоко понимают
               VR-технологии и умеют превращать идеи в качественные цифровые
               продукты. Мы внимательно подходим к каждой детали, чтобы
               создавать удобный, современный и впечатляющий пользовательский
               опыт.
            </Typography>
         ),
      },
      {
         id: "2",
         title: "Индивидуальный подход к каждому проекту",
         content: (
            <Typography variant="body-3" as="p">
               Мы создаем VR-решения под задачи бизнеса: от презентаций и
               симуляций до интерактивных сцен. Каждый продукт решает реальные
               цели клиента и работает на результат.
            </Typography>
         ),
      },
      {
         id: "3",
         title: "Поддержка и развитие на каждом этапе",
         content: (
            <Typography variant="body-3" as="p">
               Мы сопровождаем проект от идеи до запуска и дальнейшего развития.
               При необходимости дорабатываем продукт, адаптируем его под новую
               аудиторию и расширяем функциональность.
            </Typography>
         ),
      },
   ],
};

export const FAQ_DATA_CONFIG: FaqData & BlockTitleData = {
   title: "Часто задаваемые вопросы",
   section: "FAQ",
   description:
      "В VRNas мы хотим, чтобы у вас было достаточно информации для осознанного выбора наших VR-услуг. Ниже — ответы на самые частые вопросы:",
};
