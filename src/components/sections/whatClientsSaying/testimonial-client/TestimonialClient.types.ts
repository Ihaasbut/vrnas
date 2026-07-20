import { StaticImageData } from "next/image";

import type { TestimonialTooltip } from "./TestimonialClientTooltip/TestimonialClientTooltip.types";

export type TestimonialBreakpointPosition = {
   top: string;
   left: string;
};

export type TestimonialPosition = {
   desktop: TestimonialBreakpointPosition;
   tablet: TestimonialBreakpointPosition;
   mobile: TestimonialBreakpointPosition;
};

export type Testimonial = {
   id: string;
   avatar: StaticImageData;
   alt: string;
   tooltip: TestimonialTooltip;
   position: TestimonialPosition;
};

export type TestimonialClientProps = {
   client: Testimonial;
   isActive: boolean;
   onActivate: (clientId: Testimonial["id"]) => void;
};
