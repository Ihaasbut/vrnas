import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import type { TestimonialClientTooltipProps } from "./TestimonialClientTooltip.types";

import styles from "./TestimonialClientTooltip.module.scss";

function TestimonialClientTooltip({
   data,
   className,
   isActive,
   style,
}: TestimonialClientTooltipProps) {
   const { tooltip } = data;
   const { quote, author, role, tooltipPosition } = tooltip;

   const tooltipPositionClassName =
      tooltipPosition === "left" ? styles.left : styles.right;

   return (
      <div
         className={cn(
            styles.tooltipCard,
            tooltipPositionClassName,
            isActive && styles.active,
            className,
            "border-white-fade",
         )}
         style={style}
      >
         <Typography variant="body-4">{quote}</Typography>

         <Typography className={styles.author} variant="body-4">
            {author}- {role}
         </Typography>
      </div>
   );
}

export default TestimonialClientTooltip;
