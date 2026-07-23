import type { CSSProperties } from "react";

export type TestimonialTooltipPosition = "left" | "right";

export type TestimonialTooltipEl = {
   quote: string;
   author: string;
   role: string;
   tooltipPosition: TestimonialTooltipPosition;
};

export type TestimonialTooltipData = {
   tooltip: TestimonialTooltipEl;
};

export type TestimonialClientTooltipProps = {
   data: TestimonialTooltipData;
   className: string;
   isActive: boolean;
   style: CSSProperties;
};
