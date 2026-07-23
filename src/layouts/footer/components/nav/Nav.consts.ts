import LocationIcon from "@/components/ui/icons/LocationIcon";
import MailIcon from "@/components/ui/icons/MailIcon";
import TelephoneIcon from "@/components/ui/icons/TelephoneIcon";

import { NavLinkSectionEl } from "./Nav.types";

export const NAV_SECTIONS: NavLinkSectionEl[] = [
   {
      title: "Быстрые ссылки",
      links: [
         {
            title: "Главная",
            href: "/",
         },
         {
            title: "Тарифы",
            href: "/price",
         },
         {
            title: "Услуги",
            href: "/services",
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
            href: "/about",
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
            href: "/about",
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
];
