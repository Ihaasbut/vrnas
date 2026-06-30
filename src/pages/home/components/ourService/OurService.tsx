import ArcGlow from "@/components/arc-glow/ArcGlow";
import Container from "@/components/container/Container";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Typography from "@/components/typography/Typography";

import Services from "./components/services/Services";
import { OUR_SERVICE_CONFIG } from "./OurService.consts";

import styles from "./OurService.module.scss";

function OurService() {
   return (
      <section className={styles.ourService}>
         <Container>
            <div className={styles.header}>
               <BlockTitle
                  title={OUR_SERVICE_CONFIG.sectionTitle}
                  description={OUR_SERVICE_CONFIG.title}
               />

               <div className={styles.textWrapper}>
                  <Typography variant="body-1" as="p">
                     {OUR_SERVICE_CONFIG.text}
                  </Typography>

                  <ArcGlow className={styles.arcGlow} />
               </div>
            </div>

            <Services />
         </Container>
      </section>
   );
}

export default OurService;
