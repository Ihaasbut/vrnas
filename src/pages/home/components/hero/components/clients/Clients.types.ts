import { StaticImageData } from "next/image";

export type HeroClientImage = {
   image: StaticImageData;
   alt: string;
};

export type HeroClientsProps = {
   clients: HeroClients;
};

export type HeroClients = {
   clientsCount: string;
   clientsLabel: string;
   clientsImage: [HeroClientImage, ...HeroClientImage[]];
};
