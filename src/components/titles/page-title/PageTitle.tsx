import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";
import { PageTitleProps } from "./PageTitle.types";
import Typography from "@/components/typography/Typography";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ArcGlow from "@/components/arc-glow/ArcGlow";
import styles from "./PageTitle.module.scss";
import cn from "classnames";

function PageTitle({ title, breadcrumbs }: PageTitleProps) {
   const { isMobile } = useClientBreakpoint();

   const PAGE_TITLE_CONFIG = {
      width: isMobile ? "299px" : "449px",
      height: isMobile ? "98px" : "147px",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
   };

   return (
      <div className={cn(styles["page-title"], "border-brand")}>
         <Typography variant={isMobile ? "heading-3" : "heading-1"} as="h2">
            {title}
         </Typography>

         <Breadcrumbs breadcrumbs={breadcrumbs} />

         <ArcGlow config={PAGE_TITLE_CONFIG} />
      </div>
   );
}

export default PageTitle;
