import { StaticImageData } from "next/image";

export type HeroProps = {
   data: HeroData;
};

export type HeroData = {
   title: string;
   description: string;
   bannerImage: StaticImageData;
   bannerImageMobile: StaticImageData;
   bannerAlt: string;
   buttonText: string;
};
