"use client";

import Image from "next/image";
import cn from "classnames";

import ArcGlow from "@/components/ui/arc-glow/ArcGlow";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

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
   const { isDesktop, isTablet, isMobile } = useClientBreakpoint();
   const { desktop, tablet, mobile } = client.position;

   let currentPosition;

   if (isDesktop) {
      currentPosition = desktop;
   } else if (isTablet) {
      currentPosition = tablet;
   } else {
      currentPosition = mobile;
   }

   const clientStyles = {
      top: currentPosition.top,
      left: currentPosition.left,
   };

   const tooltipData: TestimonialTooltipData = {
      tooltip: client.tooltip,
   };

   const tooltipStyles = isMobile
      ? {
           top: `calc(${currentPosition.top} - 12px)`,
        }
      : clientStyles;

   return (
      <>
         <div className={cn(styles.tooltipLayer, isActive && styles.active)}>
            <TestimonialClientTooltip
               data={tooltipData}
               className={styles.tooltip}
               isActive={isActive}
               style={tooltipStyles}
            />
         </div>

         <div
            className={cn(styles.client, isActive && styles.active)}
            style={clientStyles}
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
