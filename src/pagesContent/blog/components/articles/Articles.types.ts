import { StaticImageData } from "next/image";

export type ArticleTag =
   | "VR-разработка"
   | "VR-игры"
   | "VR-дизайн"
   | "VR-мероприятия"
   | "VR-консалтинг"
   | "VR-развлечения";

export type Article = {
   id: number;
   image: StaticImageData;
   tag: ArticleTag;
   title: string;
   link: string;
   popularity: number;
   author: string;
   date: string;
   postTags: string[];
   texts: string[];
};
