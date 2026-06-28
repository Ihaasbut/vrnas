import Image from "next/image";
import styles from "./Video.module.scss";
import videoImage from "@/assets/images/hero/hero-video.webp";
import videoPlayIcon from "@/assets/images/video-play.svg";
import { VideoConfig } from "./Video.types";

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
