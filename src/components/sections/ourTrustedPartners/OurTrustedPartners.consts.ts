import ourTrustedPartnersImage from "@/assets/images/our-trusted-partners.webp";

import type { OurTrustedPartnersData } from "./OurTrustedPartners.types";

export const OUR_TRUSTED_PARTNERS_IMAGE = ourTrustedPartnersImage;

export const OUR_TRUSTED_PARTNERS_DATA: OurTrustedPartnersData = {
   section: "Наши партнеры",
   title: "Компании, с которыми мы работаем",
   imageAlt: "Логотипы наших партнеров",
   clients: [
      { name: "VR Studio" },
      { name: "EduSpace" },
      { name: "ProTech" },
      { name: "ArtVision" },
      { name: "BuildLab" },
      { name: "MedSim" },
      { name: "AutoCraft" },
   ],
};
