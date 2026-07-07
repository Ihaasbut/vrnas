import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

import OurService from "../../components/ourService/OurService";

import AboutUs from "./components/aboutUs/AboutUs";
import Hero from "./components/hero/Hero";
import { WHY_CHOOSE_US_DATA_CONFIG } from "./HomeContent.consts";

function HomeContent() {
   return (
      <>
         <Hero />
         <AboutUs />
         <OurService withArcGlow />
         <WhyChooseUs data={WHY_CHOOSE_US_DATA_CONFIG.data} />
      </>
   );
}

export default HomeContent;
