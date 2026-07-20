import Image from "next/image";

import videoPlayIcon from "@/assets/images/video-play.svg";
import Typography from "@/components/ui/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import { VideoProps } from "./Video.types";

import styles from "./Video.module.scss";

export function Video({ tag, title, image }: VideoProps) {
   const { isDesktop } = useClientBreakpoint();
   const currentVariant = isDesktop ? "heading-4" : "heading-8";

   return (
      <div
         className={styles.video}
         style={{ backgroundImage: `url(${image?.src})` }}
      >
         <Typography variant="caption-2" as="span" className={styles.tag}>
            {tag}
         </Typography>

         <Typography variant={currentVariant} className={styles.title}>
            {title}
         </Typography>

         <button type="button" className={styles.playButton}>
            <Image src={videoPlayIcon} alt="" className={styles.playIcon} />
         </button>
      </div>
   );
}
