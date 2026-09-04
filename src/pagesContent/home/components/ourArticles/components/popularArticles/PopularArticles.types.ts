import { StaticImageData } from "next/image";

export type PopularArticle = {
   id: number;
   image: StaticImageData;
   tag: string;
   title: string;
   link: string;
};
