import styles from "./ArcGlow.module.scss";

type ArcGlowConf = {
   width: string;
   height: string;
   left?: string;
   top?: string;
   right?: string;
   bottom?: string;
   transform?: string;
};

type ArcGlowProps = {
   config: ArcGlowConf;
};

function ArcGlow({ config }: ArcGlowProps) {
   const { width, height, left, top, right, bottom, transform } = config;

   return (
      <div
         style={{
            width: width,
            height: height,
            left: left,
            top: top,
            right: right,
            bottom: bottom,
            transform: transform,
         }}
         className={styles.arcGlow}
      ></div>
   );
}

export default ArcGlow;
