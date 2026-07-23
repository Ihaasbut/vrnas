import whyChooseUsImage2 from "@/assets/images/why-choose-us.webp";
import { FaqProps } from "@/components/sections/faq/Faq.types";
import { WhyChooseUsProps } from "@/components/sections/whyChooseUs/WhyChooseUs.types";
import { PageTitleProps } from "@/components/titles/page-title/PageTitle.types";
import Typography from "@/components/ui/typography/Typography";

export const PRICE_PAGE_TITLE: PageTitleProps = {
   title: "Тарифы",
   breadcrumbs: [
      { title: "Главная", link: "/" },
      { title: "Тарифы", link: "/price" },
   ],
};

export const WHY_CHOOSE_US_DATA_CONFIG_2: WhyChooseUsProps = {
   data: {
      image: whyChooseUsImage2,
      title: "Почему мы",
      section: "Почему мы",
      bgClassName: "bg-home",
      accordionElements: [
         {
            id: "0",
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
            id: "1",
            title: "Индивидуальный подход к каждому проекту",
            content: (
               <Typography variant="body-3" as="p">
                  Мы создаем VR-решения под задачи бизнеса: от презентаций и
                  симуляций до интерактивных сцен. Каждый продукт решает
                  реальные цели клиента и работает на результат.
               </Typography>
            ),
         },
         {
            id: "2",
            title: "Поддержка и развитие на каждом этапе",
            content: (
               <Typography variant="body-3" as="p">
                  Мы сопровождаем проект от идеи до запуска и дальнейшего
                  развития. При необходимости дорабатываем продукт, адаптируем
                  его под новую аудиторию и расширяем функциональность.
               </Typography>
            ),
         },
      ],
   },
};

export const FAQ_DATA_CONFIG: FaqProps = {
   title: "Часто задаваемые вопросы",
   section: "FAQ",
   isCenter: true,
   page: "price",
   description:
      "В VRNas мы хотим, чтобы у вас было достаточно информации для осознанного выбора наших VR-услуг. Ниже — ответы на самые частые вопросы:",
};
