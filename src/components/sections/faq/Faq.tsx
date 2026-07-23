"use client";

import { useState } from "react";

import AccordionBlock from "@/components/accordion/Accordion";
import { AccordionData } from "@/components/accordion/Accordion.types";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import FaqFilter from "./components/filter/FaqFilter";
import { FAQ_QUESTIONS } from "./Faq.consts";
import { FaqPage, FaqProps } from "./Faq.types";

import styles from "./Faq.module.scss";

function Faq({ data, isCenter, page, withArcGlow = false }: FaqProps) {
   const [activeFilter, setActiveFilter] = useState<FaqPage>(page);
   const { title, section, description } = data;

   const accordionElements = FAQ_QUESTIONS.filter(
      ({ pageQuestion }) =>
         activeFilter === "faq" || pageQuestion === activeFilter,
   );

   const blockTitleData: BlockTitleData = {
      section,
      title,
   };

   const accordionData: AccordionData = {
      accordionElements,
   };

   return (
      <section className={styles.faqWrapper}>
         <Container>
            <div className={styles.faqInner}>
               <div className={styles.faqTitle}>
                  <BlockTitle data={blockTitleData} isCenter={isCenter} />

                  <Typography
                     variant="body-1"
                     as="p"
                     className={styles.faqDescription}
                  >
                     {description}
                  </Typography>
               </div>

               {page === "faq" && (
                  <FaqFilter
                     activeFilter={activeFilter}
                     onChange={setActiveFilter}
                  />
               )}

               <AccordionBlock data={accordionData} isBg />
            </div>
         </Container>

         {withArcGlow && <ArcGlow className={styles.arcGlow} />}
      </section>
   );
}

export default Faq;
