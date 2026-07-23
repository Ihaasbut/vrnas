export type BreadcrumbEl = {
   title: string;
   link: string;
};

export type BreadcrumbsProps = {
   breadcrumbs: [BreadcrumbEl, ...BreadcrumbEl[]];
};
