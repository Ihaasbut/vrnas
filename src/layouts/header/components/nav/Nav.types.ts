import { NavLinkChildEl } from "./components/nav-link-children/NavLinkChildren.types";

export type NavLinkEl = {
   title: string;
   href: string;
   children?: NavLinkChildEl[];
};

export type NavData = {
   navLinks: NavLinkEl[];
};

export type NavProps = {
   data: NavData;
};
