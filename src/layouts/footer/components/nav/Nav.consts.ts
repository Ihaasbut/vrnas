import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import TelephoneIcon from "@/components/icons/TelephoneIcon";

import { NavProps } from "./Nav.types";

export const NAV_SECTIONS: NavProps = {
   sections: [
      {
         title: "Быстрые ссылки",
         links: [
            {
               title: "Главная",
               href: "/",
            },
            {
               title: "Тарифы",
               href: "/about",
            },
            {
               title: "Услуги",
               href: "/contact",
            },
            {
               title: "Блог",
               href: "/about",
            },
            {
               title: "Наша команда",
               href: "/contact",
            },
         ],
      },
      {
         title: "Поддержка",
         links: [
            {
               title: "О нас",
               href: "/",
            },
            {
               title: "Связаться с нами",
               href: "/about",
            },
            {
               title: "Частые вопросы",
               href: "/contact",
            },
            {
               title: "Условия использования",
               href: "/about",
            },
            {
               title: "Политика конфиденциальности",
               href: "/contact",
            },
         ],
      },
      {
         title: "Нужна помощь?",
         links: [
            {
               title: "ул. Тверская, д. 12, Москва",
               href: "/",
               icon: LocationIcon,
            },
            {
               title: "Support@VRNas.com",
               href: "mailto:Support@VRNas.com",
               icon: MailIcon,
            },
            {
               title: "+7 (495) 782-34-91",
               href: "tel:+74957823491",
               icon: TelephoneIcon,
            },
         ],
      },
   ],
};
