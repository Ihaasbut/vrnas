import Newsletter from "@/components/sections/newsletter/Newsletter";
import OurPricing from "@/components/sections/ourPricing/OurPricing";
import OurTrustedPartners from "@/components/sections/ourTrustedPartners/OurTrustedPartners";
import WhatClientsSaying from "@/components/sections/whatClientsSaying/WhatClientsSaying";
import WhyChooseUs from "@/components/sections/whyChooseUs/WhyChooseUs";

import OurService from "../../components/sections/ourService/OurService";

import AboutUs from "./components/aboutUs/AboutUs";
import GetStarted from "./components/getStarted/GetStarted";
import Hero from "./components/hero/Hero";
import { WHY_CHOOSE_US_DATA_CONFIG } from "./HomeContent.consts";

function HomeContent() {
   return (
      <>
         <Hero />
         <AboutUs />
         <OurService withArcGlow />
         <WhyChooseUs data={WHY_CHOOSE_US_DATA_CONFIG.data} />
         <GetStarted />
         <WhatClientsSaying />
         <OurPricing />
         <OurTrustedPartners />
         <Newsletter />
      </>
   );
}

export default HomeContent;
