import { ReactNode } from "react";

export type ButtonVariant = "fill" | "outline" | "ghost";

export type ButtonProps = {
   variant: ButtonVariant;
   children: ReactNode;
   onClick?: () => void;
   href?: string;
   isSkipPadding?: boolean;
   className?: string;
};
