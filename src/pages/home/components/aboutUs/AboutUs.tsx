"use client";

import aboutUsManImage from "@/assets/images/home/aboutUs/about-us-man.webp";
import ImgTextBlock from "@/components/ImgTextBlock/ImgTextBlock";
import List from "@/components/list/List";
import { ListData } from "@/components/list/List.types";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { ABOUT_US_CONFIG } from "./AboutUs.consts";

import styles from "./AboutUs.module.scss";

function AboutUs() {
   const { section, title, text, buttonLabel, listItems } = ABOUT_US_CONFIG;

   const imgTextBlockData: BlockTitleData = {
      section,
      title,
   };

   const listData: ListData = {
      list: listItems,
   };

   return (
      <section className={styles.aboutUs}>
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

               <Button variant="fill" onClick={() => {}}>
                  <Typography variant="button-1" as="span">
                     {buttonLabel}
                  </Typography>
               </Button>
            </ImgTextBlock>
         </Container>
      </section>
   );
}

export default AboutUs;
