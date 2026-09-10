import { ReactNode } from "react";

export type ContainerInlinePadding = "end-none-until-desktop" | "end-none" | "end-none-mobile";

export type ContainerProps = {
   children: ReactNode;
   inlinePadding?: ContainerInlinePadding;
};
