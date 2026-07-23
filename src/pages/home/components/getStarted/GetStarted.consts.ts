import getStartedImage from "@/assets/images/home/getStarted/get-started-video.webp";

import { GetStartedProps } from "./GetStarted.types";

export const GET_STARTED_CONFIG: GetStartedProps = {
   section: "Старт",
   title: "Оживим ваши VR‑мечты",
   buttonLabel: "Начать",
   video: {
      tag: "VR-сервис",
      title: "Как начать",
      image: getStartedImage,
   },
};
