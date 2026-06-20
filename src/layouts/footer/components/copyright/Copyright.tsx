import Typography from "../../../../components/typography/Typography";
import styles from "./Copyright.module.scss";
import { CopyrightProps } from "./Copyright.types";

function Copyright({ text }: CopyrightProps) {
   return (
      <div className={styles.copyright}>
         <Typography variant="body-1" as="p">
            © {text}
         </Typography>
      </div>
   );
}

export default Copyright;
