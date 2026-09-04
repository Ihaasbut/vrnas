import whyChooseUsImage2 from "@/assets/images/why-choose-us.webp";
import Faq from "@/components/sections/faq/Faq";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import WhyChooseUs from "@/components/sections/whyChooseUs/WhyChooseUs";
import PageTitle from "@/components/titles/page-title/PageTitle";

import PricePlans from "./components/pricePlans/PricePlans";
import {
   FAQ_DATA,
   PRICE_PAGE_TITLE,
   WHY_CHOOSE_US_DATA_2,
} from "./PriceContent.consts";

function PriceContent() {
   return (
      <>
         <PageTitle data={PRICE_PAGE_TITLE} />
         <PricePlans isCenter />
         <WhyChooseUs
            data={WHY_CHOOSE_US_DATA_2}
            image={whyChooseUsImage2}
            bgClassName="bg-home"
         />
         <Faq data={FAQ_DATA} isCenter page="price" />
         <Newsletter />
      </>
   );
}

export default PriceContent;
