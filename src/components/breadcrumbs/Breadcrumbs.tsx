import Link from "next/link";
import BreadcrumbsArrowIcon from "../icons/BreadcrumbsArrowIcon";
import styles from "./Breadcrumbs.module.scss";
import Typography from "../typography/Typography";

type Breadcrumb = {
   title: string;
   link: string;
};

type BreadcrumbsProps = {
   breadcrumbs: Breadcrumb[];
};

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
   return (
      <div className={styles.breadcrumbs}>
         {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.title} className={styles.breadcrumb}>
               {index !== breadcrumbs.length - 1 ? (
                  <Link href={breadcrumb.link}>
                     <Typography
                        variant="heading-11"
                        as="span"
                        className={styles.breadcrumbText}
                     >
                        {breadcrumb.title}
                     </Typography>
                  </Link>
               ) : (
                  <Typography
                     variant="body-1"
                     as="span"
                     className={styles.breadcrumbText}
                  >
                     {breadcrumb.title}
                  </Typography>
               )}

               {index !== breadcrumbs.length - 1 && <BreadcrumbsArrowIcon />}
            </div>
         ))}
      </div>
   );
}

export default Breadcrumbs;
