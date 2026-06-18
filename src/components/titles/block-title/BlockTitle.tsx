import Typography from "@/components/typography/Typography";
import styles from "./BlockTitle.module.scss";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";
import { BlockTitleProps } from "./BlockTitle.types";

function BlockTitle({ title, description, isCenter }: BlockTitleProps) {
   const { isMobile } = useClientBreakpoint();

   return (
      <div
         className={styles.blockTitle}
         style={{
            alignItems: isCenter ? "center" : "left",
            textAlign: isCenter ? "center" : "left",
         }}
      >
         <Typography variant="caption-1" as="h3" className="text-linear">
            {title}
         </Typography>

         <Typography variant={isMobile ? "heading-5" : "heading-2"} as="p">
            {description}
         </Typography>
      </div>
   );
}

export default BlockTitle;
