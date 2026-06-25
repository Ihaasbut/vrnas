import { RefObject } from "react";

export type NavLinkChild = {
   title: string;
   href: string;
};

export type NavLinkChildrenProps = {
   childrenLinks: NavLinkChild[];
   dropdownRef: RefObject<HTMLDivElement | null>;
   isOpen: boolean;
   onClick: () => void;
};
