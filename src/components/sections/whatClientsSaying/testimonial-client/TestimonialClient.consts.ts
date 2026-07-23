import clientImage1 from "@/assets/images/home/hero/hero-clients/hero-client-1.webp";
import clientImage2 from "@/assets/images/home/hero/hero-clients/hero-client-2.webp";
import clientImage3 from "@/assets/images/home/hero/hero-clients/hero-client-3.webp";

import { WhatClientsSayingData } from "../WhatClientsSaying.types";

export const TESTIMONIAL_CLIENTS: WhatClientsSayingData["testimonials"] = [
   {
      id: "robert-fox",
      avatar: clientImage1,
      alt: "Фото Роберта Фокса",
      tooltip: {
         data: {
            quote: "Команда была профессиональной и отзывчивой. Рекомендуем VRNas.",
            author: "Роберт Фокс",
            role: "CEO Anono",
         },
         tooltipPosition: "right",
      },
      position: {
         desktop: { top: "20%", left: "4%" },
         tablet: { top: "12%", left: "2%" },
         mobile: { top: "8%", left: "2%" },
      },
   },
   {
      id: "sarah-johnson",
      avatar: clientImage2,
      alt: "Фото Сары Джонсон",
      tooltip: {
         data: {
            quote: "VRNas превратили сложную идею в понятный иммерсивный опыт.",
            author: "Сара Джонсон",
            role: "Продакт-менеджер",
         },
         tooltipPosition: "left",
      },
      position: {
         desktop: { top: "22%", left: "78%" },
         tablet: { top: "21.3%", left: "76%" },
         mobile: { top: "29%", left: "72%" },
      },
   },
   {
      id: "leslie-alexander",
      avatar: clientImage3,
      alt: "Фото Лесли Александер",
      tooltip: {
         data: {
            quote: "От стратегии до релиза всё прошло гладко. VR превзошёл ожидания.",
            author: "Лесли Александер",
            role: "Креативный директор",
         },
         tooltipPosition: "left",
      },
      position: {
         desktop: { top: "45%", left: "91%" },
         tablet: { top: "45%", left: "83%" },
         mobile: { top: "64%", left: "73%" },
      },
   },
   {
      id: "courtney-henry",
      avatar: clientImage2,
      alt: "Фото Кортни Генри",
      tooltip: {
         data: {
            quote: "VR-опыт получился удобным и цельным. Правки учитывали быстро.",
            author: "Кортни Генри",
            role: "Руководитель операций",
         },
         tooltipPosition: "right",
      },
      position: {
         desktop: { top: "78%", left: "9%" },
         tablet: { top: "74%", left: "4%" },
         mobile: { top: "65%", left: "15%" },
      },
   },
   {
      id: "wade-warren",
      avatar: clientImage1,
      alt: "Фото Уэйда Уоррена",
      tooltip: {
         data: {
            quote: "Запуск стал ярче благодаря VR — гости запомнили впечатление.",
            author: "Уэйд Уоррен",
            role: "Руководитель маркетинга",
         },
         tooltipPosition: "right",
      },
      position: {
         desktop: { top: "70%", left: "40%" },
         tablet: { top: "66%", left: "36%" },
         mobile: { top: "86%", left: "6%" },
      },
   },
   {
      id: "jenny-wilson",
      avatar: clientImage3,
      alt: "Фото Дженни Уилсон",
      tooltip: {
         data: {
            quote: "С VRNas было легко работать. Сделали сильный VR-нарратив.",
            author: "Дженни Уилсон",
            role: "Бренд-стратег",
         },
         tooltipPosition: "left",
      },
      position: {
         desktop: { top: "80%", left: "80%" },
         tablet: { top: "78%", left: "82%" },
         mobile: { top: "86%", left: "38%" },
      },
   },
];
