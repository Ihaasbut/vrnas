import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import { TitleTextProps } from "./TitleText.types";

import styles from "./TitleText.module.scss";

function TitleText({ data, className }: TitleTextProps) {
   const { title, text, list } = data;

   return (
      <div className={cn(styles.titleText, className)}>
         {title && (
            <Typography variant="heading-8" as="h3">
               {title}
            </Typography>
         )}

         {text && text.length > 0 && (
            <div className={styles.texts}>
               {text.map((paragraph) => (
                  <Typography
                     key={paragraph}
                     variant="body-1"
                     as="p"
                     className={styles.text}
                  >
                     {paragraph}
                  </Typography>
               ))}
            </div>
         )}

         {list && list.length > 0 && (
            <ul className={styles.list}>
               {list.map((item) => (
                  <li key={item} className={styles.listItem}>
                     <Typography variant="body-1" as="span">
                        {item}
                     </Typography>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default TitleText;
