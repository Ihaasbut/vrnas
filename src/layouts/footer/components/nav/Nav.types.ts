import { ComponentType } from "react";

export type NavLink = {
   title: string;
   href: string;
   icon?: ComponentType;
};

export type NavLinkSection = {
   title: string;
   links: NavLink[];
};

export type NavProps = {
   sections: NavLinkSection[];
};
