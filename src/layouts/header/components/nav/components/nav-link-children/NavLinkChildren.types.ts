import { RefObject } from "react";

export type NavLinkChildEl = {
   title: string;
   href: string;
};

export type NavLinkChildrenData = {
   childrenLinks: NavLinkChildEl[];
};

export type NavLinkChildrenProps = {
   data: NavLinkChildrenData;
   dropdownRef: RefObject<HTMLDivElement | null>;
   isOpen: boolean;
   onClick: () => void;
};
