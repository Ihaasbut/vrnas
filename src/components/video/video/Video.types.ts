import { StaticImageData } from "next/image";

export type VideoData = {
   tag: string;
   title: string;
   image: StaticImageData;
};

export type VideoProps = {
   data: VideoData;
};
