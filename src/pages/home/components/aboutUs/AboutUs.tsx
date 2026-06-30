"use client";

import Image from "next/image";

import aboutUsManImage from "@/assets/images/home/aboutUs/about-us-man.webp";
import ArcGlow from "@/components/arc-glow/ArcGlow";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Typography from "@/components/typography/Typography";
import Video from "@/components/video/Video";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import List from "./components/list/List";
import { ABOUT_US_LIST_ITEMS } from "./components/list/List.consts";
import { ABOUT_US_CONFIG } from "./AboutUs.consts";

import styles from "./AboutUs.module.scss";

function AboutUs() {
   const { isDesktop } = useClientBreakpoint();

   const VIDEO_CONFIG = {
      right: !isDesktop ? "0" : "6%",
      bottom: "-22px",
      width: !isDesktop ? "147px" : "196px",
      height: !isDesktop ? "97px" : "127px",
   };

   return (
      <section className={styles.aboutUs}>
         <Container>
            <div className={styles.main}>
               <div className={styles.left}>
                  <div className={styles.leftWrapper}>
                     <ArcGlow className={styles.arcGlow} />

                     <div className={styles.image}>
                        <Image
                           src={aboutUsManImage}
                           alt="О нас"
                           className={styles.imageMan}
                        />
                     </div>

                     <Video config={VIDEO_CONFIG} />
                  </div>
               </div>

               <div className={styles.right}>
                  <BlockTitle
                     title={ABOUT_US_CONFIG.sectionTitle}
                     description={ABOUT_US_CONFIG.title}
                  />

                  <Typography variant="body-1" as="p">
                     {ABOUT_US_CONFIG.text}
                  </Typography>

                  <List items={ABOUT_US_LIST_ITEMS.items} />

                  <Button variant="fill" onClick={() => {}}>
                     <Typography variant="button-1" as="span">
                        Читать подробнее
                     </Typography>
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
}

export default AboutUs;
