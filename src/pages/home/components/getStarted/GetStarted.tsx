"use client";

import BlockTitle from "@/components/titles/block-title/BlockTitle";
import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";
import { Video } from "@/components/video/video/Video";

import { GET_STARTED_CONFIG } from "./GetStarted.consts";

import styles from "./GetStarted.module.scss";

function GetStarted() {
   const { section, title, buttonLabel, video } = GET_STARTED_CONFIG;

   return (
      <section className={styles.getStartedWrapper}>
         <Container>
            <div className={styles.getStarted}>
               <BlockTitle section={section} title={title} isCenter />

               <Video tag={video.tag} title={video.title} image={video.image} />

               <Button variant="fill" onClick={() => {}}>
                  <Typography variant="button-1">{buttonLabel}</Typography>
               </Button>
            </div>
         </Container>

         <ArcGlow className={styles.arcGlow} />
      </section>
   );
}

export default GetStarted;
