import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import { FAQ_FILTERS } from "./FaqFilter.consts";
import { FaqFilterProps } from "./FaqFilter.types";

import styles from "./FaqFilter.module.scss";

function FaqFilter({ activeFilter, onChange }: FaqFilterProps) {
   return (
      <div className={styles.filters}>
         {FAQ_FILTERS.map((filter) => {
            const isActive = filter.value === activeFilter;

            return (
               <button
                  key={filter.value}
                  type="button"
                  className={cn(styles.filter, {
                     [styles.active]: isActive,
                  })}
                  onClick={() => onChange(filter.value)}
               >
                  <Typography variant="button-2" as="span">
                     {filter.title}
                  </Typography>
               </button>
            );
         })}
      </div>
   );
}

export default FaqFilter;
