import CheckboxIcon from "@/components/ui/icons/CheckboxIcon";
import Typography from "@/components/ui/typography/Typography";

import { ListEl, ListProps } from "./List.types";

import styles from "./List.module.scss";

function List({ items }: ListProps) {
   return (
      <ul className={styles.list}>
         {items.map((item: ListEl) => (
            <li key={item.label} className={styles.item}>
               <CheckboxIcon />

               <Typography variant="body-3" as="span">
                  {item.label}
               </Typography>
            </li>
         ))}
      </ul>
   );
}

export default List;
