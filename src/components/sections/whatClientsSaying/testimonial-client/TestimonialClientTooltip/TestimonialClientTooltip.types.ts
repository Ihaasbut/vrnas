import type { CSSProperties } from "react";

export type TestimonialTooltipPosition = "left" | "right";

export type TestimonialTooltipData = {
   quote: string;
   author: string;
   role: string;
};

export type TestimonialTooltip = {
   data: TestimonialTooltipData;
   tooltipPosition: TestimonialTooltipPosition;
};

export type TestimonialClientTooltipProps = TestimonialTooltip & {
   className: string;
   isActive: boolean;
   style: CSSProperties;
};
