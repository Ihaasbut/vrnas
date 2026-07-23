import cn from "classnames";

import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import { PageTitleProps } from "./PageTitle.types";

import styles from "./PageTitle.module.scss";

function PageTitle({ data }: PageTitleProps) {
   const { title, breadcrumbs } = data;
   const { isDesktop } = useClientBreakpoint();

   const currentHeading = !isDesktop ? "heading-3" : "heading-1";

   return (
      <Container>
         <div className={cn(styles["page-title"], "border-brand")}>
            <Typography variant={currentHeading} as="h2">
               {title}
            </Typography>

            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <ArcGlow className={styles.arcGlow} />
         </div>
      </Container>
   );
}

export default PageTitle;
