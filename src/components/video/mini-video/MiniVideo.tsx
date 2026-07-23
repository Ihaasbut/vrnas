import Image from "next/image";
import cn from "classnames";

import videoImage from "@/assets/images/home/hero/hero-video.webp";
import miniVideoPlayIcon from "@/assets/images/mini-video-play.svg";

import { MiniVideoProps } from "./MiniVideo.types";

import styles from "./MiniVideo.module.scss";

function MiniVideo({ className }: MiniVideoProps) {
   return (
      <button className={cn(styles.video, className)}>
         <div className={styles.wrapper}>
            <Image src={videoImage} alt="Видео" className={styles.videoImage} />

            <Image
               src={miniVideoPlayIcon}
               alt="Видео плеер"
               className={styles.miniVideoPlayIcon}
            />
         </div>
      </button>
   );
}

export default MiniVideo;
