import { ComponentType } from "react";

export type HeroFeature = {
   icon: ComponentType;
   title: string;
   description: string;
};

export type HeroFeaturesProps = {
   features: HeroFeature[];
};
