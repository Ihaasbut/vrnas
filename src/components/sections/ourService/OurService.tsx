import BlockTitle from "@/components/titles/block-title/BlockTitle";
import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import Services from "./components/services/Services";
import { OUR_SERVICE_CONFIG } from "./OurService.consts";
import { OurServiceProps } from "./OurService.types";

import styles from "./OurService.module.scss";

function OurService({ withArcGlow = false }: OurServiceProps) {
   return (
      <section className={styles.ourService}>
         <Container>
            <div className={styles.header}>
               <BlockTitle
                  section={OUR_SERVICE_CONFIG.sectionTitle}
                  title={OUR_SERVICE_CONFIG.title}
               />

               <div className={styles.textWrapper}>
                  <Typography variant="body-1" as="p">
                     {OUR_SERVICE_CONFIG.text}
                  </Typography>

                  {withArcGlow && <ArcGlow className={styles.arcGlow} />}
               </div>
            </div>

            <Services />
         </Container>
      </section>
   );
}

export default OurService;
