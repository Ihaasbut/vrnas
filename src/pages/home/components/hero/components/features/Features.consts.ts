import CustomizationIcon from "@/components/icons/hero/CustomizationIcon";
import ExpertiseIcon from "@/components/icons/hero/ExpertiseIcon";
import ServiceIcon from "@/components/icons/hero/ServiceIcon";
import { HeroFeaturesProps } from "./Features.types";

export const HERO_FEATURES_DATA: HeroFeaturesProps = {
   features: [
      {
         icon: ExpertiseIcon,
         title: "Экспертиза",
         description:
            "Наша команда состоит из опытных VR-разработчиков, дизайнеров и техников, которые увлечены виртуальной реальностью и стремятся создавать качественные проекты и предоставлять лучший сервис",
      },
      {
         icon: CustomizationIcon,
         title: "Кастомизация",
         description:
            "Каждый клиент уникален, и мы считаем, что каждый VR-опыт тоже должен быть уникальным. Мы работаем с вами, чтобы создать индивидуальное решение, которое соответствует вашим потребностям и целям",
      },
      {
         icon: ServiceIcon,
         title: "Сервис",
         description:
            "Мы стремимся обеспечить исключительное обслуживание клиентов — от первой консультации до финальной сдачи проекта. Наша цель — чтобы вы остались довольны каждым аспектом вашего VR-опыта.",
      },
   ],
};
