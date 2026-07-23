import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import { Feature, FeaturesProps } from "./Features.types";

import styles from "./Features.module.scss";

function Features({ features }: FeaturesProps) {
   return (
      <div className={cn(styles.features, "border-white-fade")}>
         {features.map((feature: Feature) => {
            const Icon = feature.icon;

            return (
               <div key={feature.title} className={styles.feature}>
                  <Icon />

                  <Typography variant="heading-7" as="h4">
                     {feature.title}
                  </Typography>

                  <Typography variant="body-2" as="p">
                     {feature.description}
                  </Typography>
               </div>
            );
         })}
      </div>
   );
}

export default Features;
