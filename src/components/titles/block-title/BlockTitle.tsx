"use client";

import Typography from "@/components/ui/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import { BlockTitleProps } from "./BlockTitle.types";

import styles from "./BlockTitle.module.scss";

function BlockTitle({ data, isCenter }: BlockTitleProps) {
   const { section, title } = data;
   const { isDesktop } = useClientBreakpoint();

   const alignItems = isCenter ? "center" : "left";
   const textAlign = isCenter ? "center" : "left";

   const currentHeading = !isDesktop ? "heading-5" : "heading-2";

   return (
      <div
         className={styles.blockTitle}
         style={{
            alignItems: alignItems,
            textAlign: textAlign,
         }}
      >
         <Typography variant="caption-1" as="h3" className="text-linear">
            {section}
         </Typography>

         <Typography variant={currentHeading} as="h4">
            {title}
         </Typography>
      </div>
   );
}

export default BlockTitle;
