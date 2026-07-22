import { NavLink } from "@/layouts/header/components/nav/Nav.types";

export type { NavLink };

export type NavProps = {
   navLinks: NavLink[];
   isOpen: boolean;
   onLinkClick: () => void;
};
