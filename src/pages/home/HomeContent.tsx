import OurService from "../../components/ourService/OurService";

import AboutUs from "./components/aboutUs/AboutUs";
import Hero from "./components/hero/Hero";

function HomeContent() {
   return (
      <>
         <Hero />
         <AboutUs />
         <OurService withArcGlow />
      </>
   );
}

export default HomeContent;
