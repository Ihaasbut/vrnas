import { ElementType, ReactNode } from "react";

export type TypographyVariant =
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "heading-6"
    | "heading-7"
    | "heading-8"
    | "heading-9"
    | "heading-10"
    | "heading-11"
    | "heading-12"
    | "body-1"
    | "body-2"
    | "body-3"
    | "body-4"
    | "caption-1"
    | "caption-2"
    | "caption-3"
    | "button-1"
    | "button-2";

export type TypographyProps = {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    variant: TypographyVariant;
};
