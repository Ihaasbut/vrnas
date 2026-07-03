import { ComponentType } from "react";

export type Feature = {
   icon: ComponentType;
   title: string;
   description: string;
};

export type FeaturesProps = {
   features: Feature[];
};
