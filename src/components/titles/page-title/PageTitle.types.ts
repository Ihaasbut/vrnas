import { BreadcrumbsProps } from "@/components/ui/breadcrumbs/Breadcrumbs.types";

export type PageTitleData = {
   title: string;
   breadcrumbs: BreadcrumbsProps["breadcrumbs"];
};

export type PageTitleProps = {
   data: PageTitleData;
};
