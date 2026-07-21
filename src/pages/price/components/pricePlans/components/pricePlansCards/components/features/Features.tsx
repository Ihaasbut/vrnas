import CheckboxCircleIcon from "@/components/ui/icons/CheckboxCircleIcon";
import Typography from "@/components/ui/typography/Typography";

import { FeaturesProps } from "./Features.types";

import styles from "./Features.module.scss";

function Features({ features }: FeaturesProps) {
   return (
      <div className={styles.features}>
         {features.map((feature) => (
            <div key={feature} className={styles.feature}>
               <CheckboxCircleIcon />

               <Typography variant="heading-11">{feature}</Typography>
            </div>
         ))}
      </div>
   );
}

export default Features;
