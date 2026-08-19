import Image from "next/image";

import videoPlayIcon from "@/assets/images/video-play.svg";
import Typography from "@/components/ui/typography/Typography";

import { VideoProps } from "./Video.types";

import styles from "./Video.module.scss";

export function Video({ data }: VideoProps) {
   const { tag, title, image } = data;

   return (
      <div
         className={styles.video}
         style={{ backgroundImage: `url(${image?.src})` }}
      >
         <Typography variant="caption-2" as="span" className={styles.tag}>
            {tag}
         </Typography>

         <Typography variant="heading-4" className={styles.headingDesktop}>
            {title}
         </Typography>
         <Typography variant="heading-8" className={styles.headingMobile}>
            {title}
         </Typography>

         <button type="button" className={styles.playButton}>
            <Image src={videoPlayIcon} alt="" className={styles.playIcon} />
         </button>
      </div>
   );
}
