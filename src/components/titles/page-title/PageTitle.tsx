import cn from "classnames";

import ArcGlow from "@/components/arc-glow/ArcGlow";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Typography from "@/components/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import { PageTitleProps } from "./PageTitle.types";

import styles from "./PageTitle.module.scss";

function PageTitle({ title, breadcrumbs }: PageTitleProps) {
   const { isDesktop } = useClientBreakpoint();

   const PAGE_TITLE_CONFIG = {
      width: !isDesktop ? "299px" : "449px",
      height: !isDesktop ? "98px" : "147px",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
   };

   const currentHeading = !isDesktop ? "heading-3" : "heading-1";

   return (
      <div className={cn(styles["page-title"], "border-brand")}>
         <Typography variant={currentHeading} as="h2">
            {title}
         </Typography>

         <Breadcrumbs breadcrumbs={breadcrumbs} />

         <ArcGlow config={PAGE_TITLE_CONFIG} />
      </div>
   );
}

export default PageTitle;
