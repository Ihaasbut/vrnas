import { StaticImageData } from "next/image";

export type HeroClientImage = {
   image: StaticImageData;
   alt: string;
};

export type HeroClientsData = {
   clientsCount: string;
   clientsLabel: string;
   clientsImage: [HeroClientImage, ...HeroClientImage[]];
};

export type HeroClientsProps = {
   data: HeroClientsData;
};
