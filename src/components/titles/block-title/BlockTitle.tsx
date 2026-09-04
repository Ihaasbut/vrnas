import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import { BlockTitleProps } from "./BlockTitle.types";

import styles from "./BlockTitle.module.scss";

function BlockTitle({ data, isCenter }: BlockTitleProps) {
   const { section, title } = data;

   return (
      <div className={cn(styles.blockTitle, isCenter && styles.center)}>
         <Typography variant="caption-1" as="h3" className="text-linear">
            {section}
         </Typography>

         <Typography
            variant="heading-2"
            as="h4"
            className={styles.headingDesktop}
         >
            {title}
         </Typography>
         <Typography
            variant="heading-5"
            as="h4"
            className={styles.headingMobile}
         >
            {title}
         </Typography>
      </div>
   );
}

export default BlockTitle;
