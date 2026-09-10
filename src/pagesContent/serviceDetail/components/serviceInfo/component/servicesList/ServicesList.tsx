import Link from "next/link";
import cn from "classnames";
import type { CSSProperties } from "react";

import { SERVICES_DATA } from "@/components/sections/ourService/components/services/Services.consts";
import Typography from "@/components/ui/typography/Typography";

import { ServicesListProps } from "./ServicesList.types";

import styles from "./ServicesList.module.scss";

function ServicesList({ slug }: ServicesListProps) {
   return (
      <ul className={styles.services}>
         {SERVICES_DATA.map((item, index) => {
            const itemStyles = {
               "--index": index,
            } as CSSProperties;

            return (
               <li key={item.slug} className={styles.item} style={itemStyles}>
                  <Link
                     href={item.link}
                     scroll={false}
                     className={cn(
                        styles.badge,
                        item.slug === slug
                           ? "border-brand-circle"
                           : "border-white-fade-circle",
                     )}
                  >
                     <Typography variant="heading-12" as="span">
                        {item.title}
                     </Typography>
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}

export default ServicesList;
