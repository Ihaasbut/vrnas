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
   description:
      "В VRNas мы хотим, чтобы у вас было достаточно информации для осознанного выбора наших VR-услуг. Ниже — ответы на самые частые вопросы:",
   accordionElements: [
      {
         id: "0",
         title: "Что такое виртуальная реальность?",
         content: (
            <Typography variant="body-3" as="p">
               Виртуальная реальность (VR) — это технология, которая с помощью
               шлемов и других устройств создает имитацию окружения.
               Пользователь может взаимодействовать с этим миром так, будто он
               настоящий: в играх, обучении, презентациях и других сценариях.
            </Typography>
         ),
      },
      {
         id: "1",
         title: "Какие VR-услуги вы предлагаете?",
         content: (
            <Typography variant="body-3" as="p">
               Мы разрабатываем VR-презентации, интерактивные туры, обучающие
               симуляции и иммерсивные сцены под задачи бизнеса. Подбираем
               формат под вашу аудиторию и цели проекта.
            </Typography>
         ),
      },
      {
         id: "2",
         title: "Сколько стоят ваши VR-услуги?",
         content: (
            <Typography variant="body-3" as="p">
               Стоимость зависит от сложности сцены, объема контента и сроков.
               Базовые пакеты указаны на странице тарифов, а точную цену мы
               считаем после короткого брифа по вашему проекту.
            </Typography>
         ),
      },
      {
         id: "3",
         title: "Какое оборудование нужно для ваших VR-услуг?",
         content: (
            <Typography variant="body-3" as="p">
               Для большинства проектов достаточно популярных VR-шлемов — Meta
               Quest, HTC Vive или аналогов. Если нужен более сложный сетап,
               подскажем, что арендовать или закупить, и поможем с настройкой.
            </Typography>
         ),
      },
      {
         id: "4",
         title: "Можно ли попробовать ваши VR-услуги до заказа?",
         content: (
            <Typography variant="body-3" as="p">
               Да. Мы проводим демо-сессии и показываем готовые кейсы, чтобы вы
               заранее оценили качество и формат. После демо обсуждаем задачи и
               предлагаем подходящее решение.
            </Typography>
         ),
      },
   ],
};
