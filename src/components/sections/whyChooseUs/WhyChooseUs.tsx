import Accordion from "@/components/accordion/Accordion";
import { AccordionData } from "@/components/accordion/Accordion.types";
import ImgTextBlock from "@/components/ImgTextBlock/ImgTextBlock";
import Container from "@/components/ui/container/Container";

import { WhyChooseUsProps } from "./WhyChooseUs.types";

import styles from "./WhyChooseUs.module.scss";

function WhyChooseUs({
   data,
   image,
   isReverse,
   bgClassName,
}: WhyChooseUsProps) {
   const { title, section, accordionElements } = data;
   const imgTextBlockData = {
      section,
      title,
   };

   const accordionData: AccordionData = {
      accordionElements,
   };

   return (
      <section className={styles.whyChooseUs}>
         <Container>
            <ImgTextBlock
               image={image}
               data={imgTextBlockData}
               isReverse={isReverse}
               bgClassName={styles[`${bgClassName}`]}
            >
               <Accordion data={accordionData} className={styles.accordion} />
            </ImgTextBlock>
         </Container>
      </section>
   );
}

export default WhyChooseUs;
