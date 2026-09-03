import aboutUsManImage from "@/assets/images/home/aboutUsHome/about-us-man.webp";
import ImgTextBlock from "@/components/ImgTextBlock/ImgTextBlock";
import List from "@/components/list/List";
import { ListData } from "@/components/list/List.types";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { ABOUT_US_HOME_DATA } from "./AboutUsHome.consts";

import styles from "./AboutUsHome.module.scss";

function AboutUsHome() {
   const { section, title, text, buttonLabel, listItems } = ABOUT_US_HOME_DATA;

   const imgTextBlockData: BlockTitleData = {
      section,
      title,
   };

   const listData: ListData = {
      list: listItems,
   };

   return (
      <section className={styles.aboutUsHome}>
         <Container>
            <ImgTextBlock
               image={aboutUsManImage}
               data={imgTextBlockData}
               bgClassName={styles.bg}
            >
               <Typography variant="body-1" as="p">
                  {text}
               </Typography>

               <List data={listData} />

               <Button variant="fill">
                  <Typography variant="button-1" as="span">
                     {buttonLabel}
                  </Typography>
               </Button>
            </ImgTextBlock>
         </Container>
      </section>
   );
}

export default AboutUsHome;
