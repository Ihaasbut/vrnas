import whatClientsSayingImage from "@/assets/images/home/whatClientsSaying/what-clients-saying.webp";

import { TESTIMONIAL_CLIENTS } from "./testimonial-client/TestimonialClient.consts";
import type { WhatClientsSayingData } from "./WhatClientsSaying.types";

export const WHAT_CLIENTS_SAYING_IMAGE = whatClientsSayingImage;

export const WHAT_CLIENTS_SAYING_DATA: WhatClientsSayingData = {
   section: "ОТЗЫВЫ",
   title: "Что говорят наши клиенты",
   imageAlt: "Мужчина в VR-гарнитуре",
   testimonials: TESTIMONIAL_CLIENTS,
};
