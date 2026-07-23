import { BlockTitleData } from "../../titles/block-title/BlockTitle.types";

import { TestimonialEl } from "./testimonial-client/TestimonialClient.types";

export type WhatClientsSayingData = BlockTitleData & {
   imageAlt: string;
   testimonials: [TestimonialEl, ...TestimonialEl[]];
};
