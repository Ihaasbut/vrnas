import whyChooseUsImage from "@/assets/images/home/whyChooseUs/why-choose-us-home.webp";
import Typography from "@/components/ui/typography/Typography";
import { WhyChooseUsProps } from "@/components/whyChooseUs/WhyChooseUs.types";

export const WHY_CHOOSE_US_DATA_CONFIG: WhyChooseUsProps = {
   data: {
      image: whyChooseUsImage,
      title: "Почему мы",
      section: "Почему мы",
      isReverse: true,
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
