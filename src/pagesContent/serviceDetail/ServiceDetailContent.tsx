import Newsletter from "@/components/sections/newsletter/Newsletter";
import OurPricing from "@/components/sections/ourPricing/OurPricing";
import WhatClientsSaying from "@/components/sections/whatClientsSaying/WhatClientsSaying";
import PageTitle from "@/components/titles/page-title/PageTitle";

import ServiceInfo from "./components/serviceInfo/ServiceInfo";
import { SERVICE_DETAIL_BREADCRUMBS } from "./ServiceDetailContent.consts";
import { ServiceDetailContentProps } from "./ServiceDetailContent.types";

function ServiceDetailContent({ service }: ServiceDetailContentProps) {
   const { title } = service;

   return (
      <>
         <PageTitle
            data={{
               title,
               breadcrumbs: [
                  ...SERVICE_DETAIL_BREADCRUMBS,
                  { title, link: "" },
               ],
            }}
         />
         <ServiceInfo service={service} />
         <OurPricing withArcGlow />
         <Newsletter />
      </>
   );
}

export default ServiceDetailContent;
