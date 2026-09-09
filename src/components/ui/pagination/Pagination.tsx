import { ReactNode } from "react";
import cn from "classnames";

import Button from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";

import { PAGINATION_ELLIPSIS } from "./Pagination.consts";
import { PaginationProps } from "./Pagination.types";

import styles from "./Pagination.module.scss";

function Pagination({ current, total, onChange }: PaginationProps) {
   if (total <= 1) {
      return null;
   }

   const pages: number[] = [1];

   if (current - 1 > 1) {
      pages.push(current - 1);
   }

   if (current !== 1 && current !== total) {
      pages.push(current);
   }

   if (current + 1 < total) {
      pages.push(current + 1);
   }

   pages.push(total);

   const items: ReactNode[] = [];

   pages.forEach((page, index) => {
      const previous = pages[index - 1];

      if (previous !== undefined && page - previous > 1) {
         items.push(
            <span key={`ellipsis-${page}`} className={styles.ellipsis}>
               <Typography variant="button-2" as="span">
                  {PAGINATION_ELLIPSIS}
               </Typography>
            </span>,
         );
      }

      items.push(
         <Button
            key={page}
            variant="outline"
            isSkipPadding={true}
            className={cn(styles.page, {
               [styles.inactive]: page !== current,
            })}
            onClick={() => onChange(page)}
         >
            <Typography variant="button-2" as="span">
               {page}
            </Typography>
         </Button>,
      );
   });

   return <nav className={styles.pagination}>{items}</nav>;
}

export default Pagination;
