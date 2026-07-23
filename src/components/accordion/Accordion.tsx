import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import cn from "classnames";

import ArrowAccordion from "@/components/ui/icons/ArrowAccordion";
import Typography from "@/components/ui/typography/Typography";

import { AccordionProps } from "./Accordion.types";

import styles from "./Accordion.module.scss";

export default function AccordionBlock({
   data,
   className,
   isBg = false,
}: AccordionProps) {
   const { accordionElements } = data;
   const firstAccordionElementId = accordionElements[0]?.id;

   return (
      <Accordion
         allowMultiple
         transition
         transitionTimeout={250}
         className={cn(styles.accordion, className, {
            [styles.accordionBg]: isBg,
         })}
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
               className={cn(styles.item, "border-white-fade")}
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
