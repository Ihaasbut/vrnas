import agungImage from "@/assets/images/team/Agung.webp";
import aldoImage from "@/assets/images/team/Aldo.webp";
import arilImage from "@/assets/images/team/Aril.webp";
import bayuAjiImage from "@/assets/images/team/Bayu Aji.webp";
import beniImage from "@/assets/images/team/Beni.webp";
import bondanImage from "@/assets/images/team/Bondan.webp";

import { TeamWorkerData } from "./TeamWorker.types";

export const TEAM_WORKERS_DATA: TeamWorkerData[] = [
   {
      image: beniImage,
      fullName: "Бени Барак",
      position: "3D-художник",
   },
   {
      image: arilImage,
      fullName: "Арил Ласо",
      position: "UI/UX-дизайнер",
   },
   {
      image: aldoImage,
      fullName: "Альдо Бой",
      position: "3D-дизайнер",
   },
   {
      image: agungImage,
      fullName: "Агунг Брэндон",
      position: "VR-художник",
   },
   {
      image: bayuAjiImage,
      fullName: "Баю Аджи",
      position: "VR-разработчик",
   },
   {
      image: bondanImage,
      fullName: "Бондан Прабово",
      position: "CEO",
   },
];
