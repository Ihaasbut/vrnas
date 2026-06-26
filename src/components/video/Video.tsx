import Image from "next/image";
import styles from "./Video.module.scss";
import videoImage from "@/assets/images/hero/hero-video.webp";
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
         <Image src={videoImage} alt="video" />
      </button>
   );
}

export default Video;
