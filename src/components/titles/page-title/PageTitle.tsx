import cn from "classnames";

import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { PageTitleProps } from "./PageTitle.types";

import styles from "./PageTitle.module.scss";

function PageTitle({ data }: PageTitleProps) {
   const { title, breadcrumbs } = data;

   return (
      <Container>
         <div className={cn(styles["page-title"], "border-brand")}>
            <Typography
               variant="heading-1"
               as="h2"
               className={styles.headingDesktop}
            >
               {title}
            </Typography>
            <Typography
               variant="heading-3"
               as="h2"
               className={styles.headingMobile}
            >
               {title}
            </Typography>

            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <ArcGlow className={styles.arcGlow} />
         </div>
      </Container>
   );
}

export default PageTitle;
