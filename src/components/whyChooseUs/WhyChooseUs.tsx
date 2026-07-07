import AccordionWithoutBg from "../accordion/Accordion";
import ImgTextBlock from "../ImgTextBlock/ImgTextBlock";
import Container from "../ui/container/Container";

import { WhyChooseUsProps } from "./WhyChooseUs.types";

import styles from "./WhyChooseUs.module.scss";

function WhyChooseUs({ data }: WhyChooseUsProps) {
   const { image, title, section, isReverse, bgClassName, accordionElements } =
      data;

   return (
      <section className={styles.whyChooseUs}>
         <Container>
            <ImgTextBlock
               image={image}
               section={section}
               title={title}
               isReverse={isReverse}
               bgClassName={styles[`${bgClassName}`]}
            >
               <AccordionWithoutBg
                  accordionElements={accordionElements}
                  className={styles.accordion}
               />
            </ImgTextBlock>
         </Container>
      </section>
   );
}

export default WhyChooseUs;
