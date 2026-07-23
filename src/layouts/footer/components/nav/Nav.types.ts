import { ComponentType } from "react";

export type NavLinkEl = {
   title: string;
   href: string;
   icon?: ComponentType;
};

export type NavLinkSectionEl = {
   title: string;
   links: NavLinkEl[];
};
