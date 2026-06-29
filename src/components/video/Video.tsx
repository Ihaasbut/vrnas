import Image from "next/image";
import cn from "classnames";

import videoImage from "@/assets/images/home/hero/hero-video.webp";
import videoPlayIcon from "@/assets/images/video-play.svg";

import { VideoProps } from "./Video.types";

import styles from "./Video.module.scss";

function Video({ className }: VideoProps) {
   return (
      <button className={cn(styles.video, className)}>
         <div className={styles.wrapper}>
            <Image src={videoImage} alt="Видео" className={styles.videoImage} />

            <Image
               src={videoPlayIcon}
               alt="Видео плеер"
               className={styles.videoPlayIcon}
            />
         </div>
      </button>
   );
}

export default Video;
