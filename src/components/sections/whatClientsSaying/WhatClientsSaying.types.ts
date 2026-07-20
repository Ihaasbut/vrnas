import { BlockTitleProps } from "../../titles/block-title/BlockTitle.types";

import { Testimonial } from "./testimonial-client/TestimonialClient.types";

export type WhatClientsSayingData = BlockTitleProps & {
   imageAlt: string;
   testimonials: [Testimonial, ...Testimonial[]];
};
