import Image from "next/image";

import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import Features from "../../../../components/features/Features";
import { FEATURES_DATA } from "../../../../components/features/Features.consts";
import MiniVideo from "../../../../components/video/mini-video/MiniVideo";

import Clients from "./components/clients/Clients";
import { HERO_CLIENTS_DATA } from "./components/clients/Clients.consts";
import { HERO_DATA } from "./Hero.const";

import styles from "./Hero.module.scss";

function Hero() {
   const {
      title,
      description,
      bannerImage,
      bannerImageMobile,
      bannerAlt,
      buttonText,
   } = HERO_DATA;

   return (
      <div className={styles.hero}>
         <Container inlinePadding="end-none-until-desktop">
            <div className={styles.main}>
               <div className={styles.left}>
                  <Typography
                     variant="heading-1"
                     as="h1"
                     className={styles.headingDesktop}
                  >
                     {title}
                  </Typography>
                  <Typography
                     variant="heading-2"
                     as="h1"
                     className={styles.headingMobile}
                  >
                     {title}
                  </Typography>

                  <Typography variant="body-1" as="p">
                     {description}
                  </Typography>

                  <Button variant="fill">
                     <Typography variant="button-1" as="span">
                        {buttonText}
                     </Typography>
                  </Button>

                  <div className={styles.businessProof}>
                     <Clients data={HERO_CLIENTS_DATA} />
                  </div>
               </div>

               <div className={styles.right}>
                  <Image
                     loading="eager"
                     priority
                     src={bannerImage}
                     alt={bannerAlt}
                     className={styles.bannerDesktop}
                  />
                  <Image
                     src={bannerImageMobile}
                     alt={bannerAlt}
                     className={styles.bannerMobile}
                  />
                  <ArcGlow className={styles.arcGlow} />
               </div>

               <MiniVideo className={styles.video} />
            </div>
         </Container>

         <Container>
            <Features data={FEATURES_DATA} />
         </Container>
      </div>
   );
}

export default Hero;
