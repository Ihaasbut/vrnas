import { ComponentType } from "react";

export type SocialMediaEl = {
   icon: ComponentType;
   href: string;
};

export type SocialMediaData = {
   socials: SocialMediaEl[];
};

export type SocialMediaProps = {
   data: SocialMediaData;
};
