import AccordionBlock from "@/components/accordion/Accordion";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { FaqProps } from "./Faq.types";

import styles from "./Faq.module.scss";

function Faq({
   title,
   section,
   isCenter,
   description,
   accordionElements,
   withArcGlow = false,
}: FaqProps) {
   return (
      <section className={styles.faqWrapper}>
         <Container>
            <div className={styles.faqInner}>
               <div className={styles.faqTitle}>
                  <BlockTitle
                     title={title}
                     section={section}
                     isCenter={isCenter}
                  />

                  <Typography
                     variant="body-1"
                     as="p"
                     className={styles.faqDescription}
                  >
                     {description}
                  </Typography>
               </div>

               <AccordionBlock accordionElements={accordionElements} isBg />
            </div>
         </Container>

         {withArcGlow && <ArcGlow className={styles.arcGlow} />}
      </section>
   );
}

export default Faq;
