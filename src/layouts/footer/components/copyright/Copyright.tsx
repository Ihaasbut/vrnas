import Typography from "../../../../components/ui/typography/Typography";

import { CopyrightProps } from "./Copyright.types";

import styles from "./Copyright.module.scss";

function Copyright({ data }: CopyrightProps) {
   const { text } = data;

   return (
      <div className={styles.copyright}>
         <Typography variant="body-1" as="p">
            {text}
         </Typography>
      </div>
   );
}

export default Copyright;
