"use client";

import aboutUsManImage from "@/assets/images/home/aboutUs/about-us-man.webp";
import ImgTextBlock from "@/components/ImgTextBlock/ImgTextBlock";
import List from "@/components/list/List";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { ABOUT_US_CONFIG, ABOUT_US_LIST_ITEMS } from "./AboutUs.consts";

import styles from "./AboutUs.module.scss";

function AboutUs() {
   const { sectionTitle, title, text, buttonText } = ABOUT_US_CONFIG;
   const { items } = ABOUT_US_LIST_ITEMS;

   return (
      <section className={styles.aboutUs}>
         <Container>
            <ImgTextBlock
               image={aboutUsManImage}
               title={sectionTitle}
               description={title}
               bgClassName={styles.bg}
            >
               <Typography variant="body-1" as="p">
                  {text}
               </Typography>

               <List items={items} />

               <Button variant="fill" onClick={() => {}}>
                  <Typography variant="button-1" as="span">
                     {buttonText}
                  </Typography>
               </Button>
            </ImgTextBlock>
         </Container>
      </section>
   );
}

export default AboutUs;
