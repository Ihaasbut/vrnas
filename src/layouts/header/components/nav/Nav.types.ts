import { NavLinkChild } from "./components/nav-link-children/NavLinkChildren.types";

export type NavLink = {
   title: string;
   href: string;
   children?: NavLinkChild[];
};

export type NavProps = {
   navLinks: NavLink[];
};
