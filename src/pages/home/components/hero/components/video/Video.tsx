import Image from "next/image";
import styles from "./Video.module.scss";
import videoImage from "@/assets/images/hero/hero-video.webp";

function Video() {
   return (
      <button className={styles.video}>
         <Image src={videoImage} alt="video" />
      </button>
   );
}

export default Video;
