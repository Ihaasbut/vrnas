import whyChooseUsImage from "@/assets/images/home/whyChooseUs/why-choose-us-home.webp";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import OurPricing from "@/components/sections/ourPricing/OurPricing";
import OurTrustedPartners from "@/components/sections/ourTrustedPartners/OurTrustedPartners";
import WhatClientsSaying from "@/components/sections/whatClientsSaying/WhatClientsSaying";
import WhyChooseUs from "@/components/sections/whyChooseUs/WhyChooseUs";

import OurService from "../../components/sections/ourService/OurService";

import AboutUsHome from "./components/aboutUsHome/AboutUsHome";
import GetStarted from "./components/getStarted/GetStarted";
import Hero from "./components/hero/Hero";
import { WHY_CHOOSE_US_DATA } from "./HomeContent.consts";

function HomeContent() {
   return (
      <>
         <Hero />
         <AboutUsHome />
         <OurService withArcGlow />
         <WhyChooseUs
            data={WHY_CHOOSE_US_DATA}
            image={whyChooseUsImage}
            isReverse={true}
            bgClassName="bg-home"
         />
         <GetStarted />
         <WhatClientsSaying />
         <OurPricing />
         <OurTrustedPartners isCenter />
         <Newsletter />
      </>
   );
}

export default HomeContent;
