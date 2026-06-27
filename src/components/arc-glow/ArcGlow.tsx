"use client";

import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import styles from "./ArcGlow.module.scss";

type ArcGlowConf = {
   width: string;
   height: string;
   left?: string;
   top?: string;
   right?: string;
   bottom?: string;
   transform?: string;
   blur?: string;
};

type ArcGlowProps = {
   config: ArcGlowConf;
};

function ArcGlow({ config }: ArcGlowProps) {
   const { isDesktop } = useClientBreakpoint();

   const {
      width,
      height,
      left,
      top,
      right,
      bottom,
      transform,
      blur = !isDesktop ? "32px" : "42px",
   } = config;

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
            filter: `blur(${blur})`,
         }}
         className={styles.arcGlow}
      ></div>
   );
}

export default ArcGlow;
