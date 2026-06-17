import Image from "next/image";
import arcGlowImage from "@/assets/images/arc-glow.svg";
import styles from "./ArcGlow.module.scss";

type ArcGlowConf = {
   width: string;
   height: string;
   left?: string;
   top?: string;
   right?: string;
   bottom?: string;
};

type ArcGlowProps = {
   config: ArcGlowConf;
};

function ArcGlow({ config }: ArcGlowProps) {
   const { width, height, left, top, right, bottom } = config;

   return (
      <div
         style={{
            width: width,
            height: height,
            left: left,
            top: top,
            right: right,
            bottom: bottom,
         }}
         className={styles.arcGlow}
      >
         <Image
            src={arcGlowImage}
            alt="Arc Glow"
            style={{ objectFit: "contain" }}
         />
      </div>
   );
}

export default ArcGlow;
