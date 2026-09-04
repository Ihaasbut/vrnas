"use client";

import Image from "next/image";
import cn from "classnames";
import type { CSSProperties } from "react";

import ArcGlow from "@/components/ui/arc-glow/ArcGlow";

import TestimonialClientTooltip from "./TestimonialClientTooltip/TestimonialClientTooltip";
import { TestimonialTooltipData } from "./TestimonialClientTooltip/TestimonialClientTooltip.types";
import type { TestimonialClientProps } from "./TestimonialClient.types";

import styles from "./TestimonialClient.module.scss";

function TestimonialClient({
   data,
   isActive,
   onActivate,
}: TestimonialClientProps) {
   const { client } = data;
   const { desktop, tablet, mobile } = client.position;

   const positionVars = {
      "--pos-desktop-top": desktop.top,
      "--pos-desktop-left": desktop.left,
      "--pos-tablet-top": tablet.top,
      "--pos-tablet-left": tablet.left,
      "--pos-mobile-top": mobile.top,
      "--pos-mobile-left": mobile.left,
   } as CSSProperties;

   const tooltipData: TestimonialTooltipData = {
      tooltip: client.tooltip,
   };

   return (
      <>
         <div className={cn(styles.tooltipLayer, isActive && styles.active)}>
            <TestimonialClientTooltip
               data={tooltipData}
               className={styles.tooltip}
               isActive={isActive}
               style={positionVars}
            />
         </div>

         <div
            className={cn(styles.client, isActive && styles.active)}
            style={positionVars}
         >
            <button
               type="button"
               className={cn(styles.clientMarker, isActive && styles.active)}
               onMouseEnter={() => onActivate(client.id)}
               onClick={() => onActivate(client.id)}
            >
               <div
                  className={cn(styles.clientPulse, "border-white-fade-circle")}
               >
                  <ArcGlow className={styles.arcGlow} />

                  <div className={styles.clientAvatar}>
                     <Image src={client.avatar} alt={client.alt} />
                  </div>
               </div>
            </button>
         </div>
      </>
   );
}

export default TestimonialClient;
