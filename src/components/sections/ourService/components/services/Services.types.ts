import { StaticImageData } from "next/image";

export type ServiceSlug =
   | "vr-development"
   | "vr-design"
   | "vr-consulting"
   | "vr-games"
   | "vr-events"
   | "vr-entertainment";

export type ServiceEl = {
   icon: StaticImageData;
   title: string;
   description: string;
   slug: ServiceSlug;
   link: string;
   texts: string[];
   listTitle: string;
   listItems: string[];
};
