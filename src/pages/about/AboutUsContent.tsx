"use client";

import whyChooseUsImage2 from "@/assets/images/why-choose-us.webp";
import Faq from "@/components/sections/faq/Faq";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import OurTrustedPartners from "@/components/sections/ourTrustedPartners/OurTrustedPartners";
import WhyChooseUs from "@/components/sections/whyChooseUs/WhyChooseUs";
import PageTitle from "@/components/titles/page-title/PageTitle";

import { FAQ_DATA, WHY_CHOOSE_US_DATA_2 } from "../price/PriceContent.consts";

import AboutUsAbout from "./components/aboutUsAbout/AboutUsAbout";
import WhyChooseUsFeatures from "./components/whyChooseUsFeatures/WhyChooseUsFeatures";
import { ABOUT_US_PAGE_TITLE } from "./AboutUsContent.consts";

function AboutUsContent() {
   return (
      <>
         <PageTitle data={ABOUT_US_PAGE_TITLE} />
         <AboutUsAbout />
         <WhyChooseUsFeatures />
         <WhyChooseUs
            data={WHY_CHOOSE_US_DATA_2}
            image={whyChooseUsImage2}
            bgClassName="bg-home"
         />
         <OurTrustedPartners isCenter />
         <Faq data={FAQ_DATA} page="about" isCenter />
         <Newsletter />
      </>
   );
}

export default AboutUsContent;
