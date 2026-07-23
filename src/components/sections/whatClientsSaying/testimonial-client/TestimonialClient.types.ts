import { StaticImageData } from "next/image";

import type { TestimonialTooltipEl } from "./TestimonialClientTooltip/TestimonialClientTooltip.types";

export type TestimonialBreakpointPosition = {
   top: string;
   left: string;
};

export type TestimonialPosition = {
   desktop: TestimonialBreakpointPosition;
   tablet: TestimonialBreakpointPosition;
   mobile: TestimonialBreakpointPosition;
};

export type TestimonialEl = {
   id: string;
   avatar: StaticImageData;
   alt: string;
   tooltip: TestimonialTooltipEl;
   position: TestimonialPosition;
};

export type TestimonialClientData = {
   client: TestimonialEl;
};

export type TestimonialClientProps = {
   data: TestimonialClientData;
   isActive: boolean;
   onActivate: (clientId: TestimonialEl["id"]) => void;
};
