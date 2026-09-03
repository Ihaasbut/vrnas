import aboutUsManImage from "@/assets/images/our-pricing-man.webp";
import ImgTextBlock from "@/components/ImgTextBlock/ImgTextBlock";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { ABOUT_US_ABOUT_DATA } from "./AboutUsAbout.consts";

import styles from "./AboutUsAbout.module.scss";

function AboutUsAbout() {
   const { section, title, text } = ABOUT_US_ABOUT_DATA;

   const imgTextBlockData: BlockTitleData = {
      section,
      title,
   };

   return (
      <section className={styles.aboutUsAbout}>
         <Container>
            <ImgTextBlock
               image={aboutUsManImage}
               data={imgTextBlockData}
               bgClassName={styles.bg}
               isReverse
               isReverseVideo
            >
               <Typography variant="body-1" as="p">
                  {text}
               </Typography>
            </ImgTextBlock>
         </Container>
      </section>
   );
}

export default AboutUsAbout;
