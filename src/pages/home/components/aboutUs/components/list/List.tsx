import CheckboxIcon from "@/components/icons/CheckboxIcon";
import Typography from "@/components/typography/Typography";

import { ListEl, ListProps } from "./List.types";

import styles from "./List.module.scss";

function List({ items }: ListProps) {
   return (
      <ul className={styles.list}>
         {items.map((item: ListEl) => (
            <li key={item.title} className={styles.item}>
               <CheckboxIcon />

               <Typography variant="body-3" as="span">
                  {item.title}
               </Typography>
            </li>
         ))}
      </ul>
   );
}

export default List;
