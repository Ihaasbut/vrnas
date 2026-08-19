import { ReactNode } from "react";

export type ContainerInlinePadding = "end-none-until-desktop" | "end-none";

export type ContainerProps = {
   children: ReactNode;
   inlinePadding?: ContainerInlinePadding;
};
