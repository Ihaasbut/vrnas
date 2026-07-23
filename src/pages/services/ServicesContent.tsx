"use client";

import Newsletter from "@/components/sections/newsletter/Newsletter";
import OurPricing from "@/components/sections/ourPricing/OurPricing";
import OurService from "@/components/sections/ourService/OurService";
import Stats from "@/components/sections/stats/Stats";
import WhatClientsSaying from "@/components/sections/whatClientsSaying/WhatClientsSaying";
import PageTitle from "@/components/titles/page-title/PageTitle";

import { SERVICES_PAGE_TITLE } from "./ServicesContent.consts";

function ServiceContent() {
   return (
      <>
         <PageTitle {...SERVICES_PAGE_TITLE} />
         <OurService />
         <Stats />
         <OurPricing withArcGlow />
         <WhatClientsSaying />
         <Newsletter />
      </>
   );
}

export default ServiceContent;
