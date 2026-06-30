import OurService1 from "@/assets/images/home/ourService/our-service-1.svg";
import OurService2 from "@/assets/images/home/ourService/our-service-2.svg";
import OurService3 from "@/assets/images/home/ourService/our-service-3.svg";
import OurService4 from "@/assets/images/home/ourService/our-service-4.svg";
import OurService5 from "@/assets/images/home/ourService/our-service-5.svg";
import OurService6 from "@/assets/images/home/ourService/our-service-6.svg";

import { ServicesProps } from "./Services.types";

export const SERVICES_DATA: ServicesProps = {
   services: [
      {
         icon: OurService1,
         title: "VR-разработка",
         description:
            "От концепции до реализации — наша команда VR-разработчиков воплотит вашу идею в жизнь.",
      },
      {
         icon: OurService2,
         title: "VR-дизайн",
         description:
            "Наши талантливые VR-дизайнеры создадут захватывающие и увлекательные пространства, которые очаруют вашу аудиторию.",
      },
      {
         icon: OurService3,
         title: "VR-консалтинг",
         description:
            "Наши VR-консультанты помогут вам убедиться, что ваш VR-опыт соответствует целям и превосходит ожидания.",
      },
      {
         icon: OurService4,
         title: "VR-игры",
         description:
            "Мы предлагаем широкий выбор VR-игр для игроков любого возраста и уровня подготовки.",
      },
      {
         icon: OurService5,
         title: "VR-мероприятия",
         description:
            "Сделайте ваше следующее мероприятие незабываемым с нашими VR-сервисами для событий.",
      },
      {
         icon: OurService6,
         title: "VR-развлечения",
         description:
            "Создайте VR-квест-комнату или предложите VR-аттракционы в парке развлечений — у нас есть экспертиза и опыт для реализации любых идей.",
      },
   ],
};
