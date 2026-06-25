import { ComponentType } from "react";

export type SocialMediaProps = {
   socials: SocialMediaItem[];
};

export type SocialMediaItem = {
   icon: ComponentType;
   href: string;
};
