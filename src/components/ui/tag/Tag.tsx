import Typography from "@/components/ui/typography/Typography";

import { TagProps } from "./Tag.types";

import styles from "./Tag.module.scss";

function Tag({ children, variant }: TagProps) {
   return (
      <Typography variant={variant} as="span" className={styles.tag}>
         {children}
      </Typography>
   );
}

export default Tag;
