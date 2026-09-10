import { ReactNode } from "react";

export type TagVariant = "caption-2" | "caption-3";

export type TagProps = {
   variant: TagVariant;
   children: ReactNode;
};
