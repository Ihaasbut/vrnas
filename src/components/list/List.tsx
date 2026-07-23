import CheckboxIcon from "@/components/ui/icons/CheckboxIcon";
import Typography from "@/components/ui/typography/Typography";

import { ListEl, ListProps } from "./List.types";

import styles from "./List.module.scss";

function List({ data }: ListProps) {
   const { list } = data;

   return (
      <ul className={styles.list}>
         {list.map((el: ListEl) => (
            <li key={el.label} className={styles.item}>
               <CheckboxIcon />

               <Typography variant="body-3" as="span">
                  {el.label}
               </Typography>
            </li>
         ))}
      </ul>
   );
}

export default List;
