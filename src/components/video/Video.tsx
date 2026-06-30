import Image from "next/image";

import videoImage from "@/assets/images/home/hero/hero-video.webp";
import videoPlayIcon from "@/assets/images/video-play.svg";

import { VideoConfig } from "./Video.types";

import styles from "./Video.module.scss";

function Video({ config }: VideoConfig) {
   const { left, right, bottom, top, width, height } = config;

   return (
      <button
         className={styles.video}
         style={{
            left: left,
            top: top,
            right: right,
            bottom: bottom,
            width: width,
            height: height,
         }}
      >
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
