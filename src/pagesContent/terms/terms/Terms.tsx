import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import TitleText from "@/components/titleText/TitleText";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { TERMS_DATA } from "./Terms.consts";

import styles from "./Terms.module.scss";

function Terms() {
   const { section, title, description, sections } = TERMS_DATA;

   const blockTitleData: BlockTitleData = {
      section,
      title,
   };

   return (
      <Container>
         <section className={styles.terms}>
            <div className={styles.header}>
               <BlockTitle data={blockTitleData} isCenter />

               <Typography
                  variant="body-1"
                  as="p"
                  className={styles.description}
               >
                  {description}
               </Typography>
            </div>

            <div className={styles.sections}>
               {sections.map((item) => (
                  <TitleText key={item.title} data={item} />
               ))}
            </div>
         </section>
      </Container>
   );
}

export default Terms;
