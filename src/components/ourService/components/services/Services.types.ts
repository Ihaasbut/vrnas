import { StaticImageData } from "next/image";

export type Service = {
   icon: StaticImageData;
   title: string;
   description: string;
   link: string;
};

export type ServicesProps = {
   services: Service[];
};
