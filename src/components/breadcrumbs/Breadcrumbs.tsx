import Link from "next/link";
import BreadcrumbsArrowIcon from "../icons/BreadcrumbsArrowIcon";
import styles from "./Breadcrumbs.module.scss";
import Typography from "../typography/Typography";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
   return (
      <div className={styles.breadcrumbs}>
         {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.title} className={styles.breadcrumb}>
               {index !== breadcrumbs.length - 1 ? (
                  <Link href={breadcrumb.link} className="default-link">
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
