import { StaticImageData } from "next/image";

export type WindowScrollArticle = {
   id: number;
   image: StaticImageData;
   tag: string;
   title: string;
   link: string;
};
