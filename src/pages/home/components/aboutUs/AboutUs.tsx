import Image from "next/image";

import aboutUsImage from "@/assets/images/home/aboutUs/about-us-man.webp";
import Container from "@/components/container/Container";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Typography from "@/components/typography/Typography";
import Video from "@/components/video/Video";

import { ABOUT_US_CONFIG } from "./About.consts";

import styles from "./AboutUs.module.scss";

function AboutUs() {
   const VIDEO_CONFIG = {
      left: "0",
      bottom: "0",
      width: "100%",
      height: "100%",
   };

   return (
      <section className={styles.aboutUs}>
         <Container>
            <div className={styles.main}>
               <div className={styles.left}>
                  <div className={styles.image}>
                     <Image src={aboutUsImage} alt="About Us" />
                  </div>

                  <Video config={VIDEO_CONFIG} />
               </div>

               <div className={styles.right}>
                  <BlockTitle
                     title={ABOUT_US_CONFIG.sectionTitle}
                     description={ABOUT_US_CONFIG.title}
                  />

                  <Typography variant="body-1" as="p">
                     {ABOUT_US_CONFIG.text}
                  </Typography>
               </div>
            </div>
         </Container>
      </section>
   );
}

export default AboutUs;
