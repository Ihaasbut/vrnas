import { NavLinkEl } from "@/layouts/footer/components/nav/Nav.types";

export type NavData = {
   navLinks: NavLinkEl[];
};

export type NavProps = {
   data: NavData;
   isOpen: boolean;
   onLinkClick: () => void;
};
