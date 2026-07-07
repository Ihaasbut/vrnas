import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import cn from "classnames";

import ArrowAccordion from "@/components/ui/icons/ArrowAccordion";
import Typography from "@/components/ui/typography/Typography";

import { AccordionProps } from "./Accordion.types";

import styles from "./accordionWithoutBg/AccordionWithoutBg.module.scss";

export default function AccordionBlock({
   accordionElements,
   className,
}: AccordionProps) {
   const firstAccordionElementId = accordionElements[0].id;

   return (
      <Accordion
         allowMultiple
         transition
         transitionTimeout={250}
         className={cn(styles.accordion, className)}
      >
         {accordionElements.map((accordionEl) => (
            <AccordionItem
               key={accordionEl.id}
               itemKey={accordionEl.id}
               initialEntered={accordionEl.id === firstAccordionElementId}
               header={
                  <div className={styles.header}>
                     <Typography
                        variant="heading-8"
                        as="span"
                        className={styles.header}
                     >
                        {accordionEl.title}
                     </Typography>

                     <span className={styles.arrow}>
                        <ArrowAccordion />
                     </span>
                  </div>
               }
               className={styles.item}
               contentProps={{
                  className: styles.content,
               }}
               panelProps={{
                  className: styles.panel,
               }}
            >
               {accordionEl.content}
            </AccordionItem>
         ))}
      </Accordion>
   );
}
