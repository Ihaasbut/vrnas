import Image from "next/image";

import videoImage from "@/assets/images/home/hero/hero-video.webp";

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
         <Image src={videoImage} alt="video" />
      </button>
   );
}

export default Video;
