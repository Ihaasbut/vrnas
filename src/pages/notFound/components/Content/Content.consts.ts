import manInCircleImage from "@/assets/images/man-in-circle.webp";

import { ContentData } from "./Content.types";

export const CONTENT_DATA: ContentData = {
   section: "Ошибка 404",
   title: "Страница не найдена",
   intro: "Упс! Похоже, страницы, которую вы искали, здесь нет. Вот возможные причины:",
   reasons: [
      { label: "Страница могла быть перемещена или удалена." },
      { label: "Возможно, вы допустили ошибку в адресе." },
      { label: "На сервере могла возникнуть временная проблема." },
   ],
   optionsIntro: "Вы можете попробовать следующее, чтобы найти нужное:",
   options: [
      { label: "Проверьте URL на опечатки и попробуйте снова." },
      { label: "Вернитесь на главную и продолжите поиск оттуда." },
   ],
   footer:
      "Если вы считаете, что на сайте ошибка, свяжитесь с нами через страницу контактов.",
   buttonText: "На главную",
   image: manInCircleImage,
   imageAlt: "Man in circle",
};
