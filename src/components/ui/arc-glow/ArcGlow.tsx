import cn from "classnames";

import { ArcGlowProps } from "./ArcGlow.types";

import styles from "./ArcGlow.module.scss";

function ArcGlow({ className }: ArcGlowProps) {
   return <div className={cn(styles.arcGlow, className)}></div>;
}

export default ArcGlow;
