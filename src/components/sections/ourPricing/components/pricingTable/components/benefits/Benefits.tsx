import cn from "classnames";

import CloudIcon from "@/components/ui/icons/CloudIcon";
import Typography from "@/components/ui/typography/Typography";

import { BenefitsProps } from "./Benefits.types";

import styles from "./Benefits.module.scss";

function Benefits({ data }: BenefitsProps) {
   const { benefits } = data;

   return (
      <div className={styles.benefits}>
         {benefits.map((benefit) => (
            <div key={benefit.title} className={styles.benefit}>
               <div className={cn("border-brand-circle", styles.icon)}>
                  <CloudIcon />
               </div>

               <div className={styles.content}>
                  <Typography variant="heading-9" as="h3">
                     {benefit.title}
                  </Typography>

                  <Typography
                     variant="body-3"
                     as="p"
                     className={styles.description}
                  >
                     {benefit.description}
                  </Typography>
               </div>
            </div>
         ))}
      </div>
   );
}

export default Benefits;
