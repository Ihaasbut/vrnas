"use client";

import Container from "@/components/container/Container";
import styles from "./Hero.module.scss";
import Typography from "@/components/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";
import Button from "@/components/button/Button";
import Image from "next/image";
import ArcGlow from "@/components/arc-glow/ArcGlow";
import Features from "./components/features/Features";
import { HERO_DATA } from "./Hero.const";
import { HERO_FEATURES_DATA } from "./components/features/Features.consts";
import Clients from "./components/clients/Clients";
import { HERO_CLIENTS_DATA } from "./components/clients/Clients.consts";
import Video from "./components/video/Video";

function Hero() {
   const {
      title,
      description,
      bannerImage,
      bannerImageMobile,
      bannerAlt,
      buttonText,
   } = HERO_DATA;

   const { isDesktop } = useClientBreakpoint();

   const heading = !isDesktop ? "heading-2" : "heading-1";
   const inlinePadding = !isDesktop ? "16px 0" : "60px";
   const bannerImageCurrent = !isDesktop ? bannerImageMobile : bannerImage;

   const PAGE_TITLE_CONFIG = {
      width: !isDesktop ? "289px" : "567px",
      height: !isDesktop ? "163px" : "340px",
      right: "0",
      top: "50%",
      transform: !isDesktop ? "none" : "translateY(-50%)",
      blur: !isDesktop ? "62px" : "76px",
   };

   return (
      <div className={styles.hero}>
         <Container inlinePadding={inlinePadding}>
            <div className={styles.main}>
               <div className={styles.left}>
                  <Typography variant={heading} as="h1">
                     {title}
                  </Typography>

                  <Typography variant="body-1" as="p">
                     {description}
                  </Typography>

                  <Button variant="fill" onClick={() => {}}>
                     <Typography variant="button-1" as="span">
                        {buttonText}
                     </Typography>
                  </Button>

                  <div className={styles.businessProof}>
                     <Clients clients={HERO_CLIENTS_DATA.clients} />
                  </div>
               </div>

               <div className={styles.right}>
                  <Image
                     loading="eager"
                     priority
                     src={bannerImageCurrent}
                     alt={bannerAlt}
                     className={styles.banner}
                  />

                  <ArcGlow config={PAGE_TITLE_CONFIG} />
               </div>

               <Video />
            </div>
         </Container>

         <Container>
            <Features features={HERO_FEATURES_DATA.features} />
         </Container>
      </div>
   );
}

export default Hero;
