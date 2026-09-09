import clientImage1 from "@/assets/images/home/hero/hero-clients/hero-client-1.webp";
import clientImage2 from "@/assets/images/home/hero/hero-clients/hero-client-2.webp";
import clientImage3 from "@/assets/images/home/hero/hero-clients/hero-client-3.webp";

import { HeroClientsData } from "./Clients.types";

export const HERO_CLIENTS_DATA: HeroClientsData = {
   clientsCount: "32k+",
   clientsLabel: "довольных\u00A0клиентов",
   clientsImage: [
      {
         image: clientImage1,
         alt: "Аватар довольного клиента 1",
      },
      {
         image: clientImage2,
         alt: "Аватар довольного клиента 2",
      },
      {
         image: clientImage3,
         alt: "Аватар довольного клиента 3",
      },
   ],
};
