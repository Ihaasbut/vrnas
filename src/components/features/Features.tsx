import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import { FeatureEl, FeaturesProps } from "./Features.types";

import styles from "./Features.module.scss";

function Features({ data }: FeaturesProps) {
   const { features } = data;

   return (
      <div className={cn(styles.features, "border-white-fade")}>
         {features.map((feature: FeatureEl) => {
            const Icon = feature.icon;
            const { title, description } = feature;

            return (
               <div key={title} className={styles.feature}>
                  <Icon />

                  <Typography variant="heading-7" as="h4">
                     {title}
                  </Typography>

                  <Typography variant="body-2" as="p">
                     {description}
                  </Typography>
               </div>
            );
         })}
      </div>
   );
}

export default Features;
