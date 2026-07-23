import { ComponentType } from "react";

export type FeaturesData = {
   features: FeatureEl[];
};

export type FeatureEl = {
   icon: ComponentType;
   title: string;
   description: string;
};

export type FeaturesProps = {
   data: FeaturesData;
};
