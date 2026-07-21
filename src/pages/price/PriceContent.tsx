"use client";

import Faq from "@/components/sections/faq/Faq";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import WhyChooseUs from "@/components/sections/whyChooseUs/WhyChooseUs";
import PageTitle from "@/components/titles/page-title/PageTitle";

import PricePlans from "./components/pricePlans/PricePlans";
import {
   FAQ_DATA_CONFIG,
   PRICE_PAGE_TITLE,
   WHY_CHOOSE_US_DATA_CONFIG_2,
} from "./PriceContent.consts";

function PriceContent() {
   return (
      <>
         <PageTitle {...PRICE_PAGE_TITLE} />
         <PricePlans />
         <WhyChooseUs data={WHY_CHOOSE_US_DATA_CONFIG_2.data} />
         <Faq {...FAQ_DATA_CONFIG} />
         <Newsletter />
      </>
   );
}

export default PriceContent;
