export type Breadcrumb = {
   title: string;
   link: string;
};

export type BreadcrumbsProps = {
   breadcrumbs: [Breadcrumb, ...Breadcrumb[]];
};
