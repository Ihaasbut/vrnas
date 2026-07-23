import Faq from "@/components/sections/faq/Faq";
import PageTitle from "@/components/titles/page-title/PageTitle";

import { FAQ_PAGE_CONFIG, FAQ_PAGE_TITLE } from "./FaqContent.consts";

function FaqContent() {
   return (
      <>
         <PageTitle data={FAQ_PAGE_TITLE} />
         <Faq data={FAQ_PAGE_CONFIG} isCenter page="faq" />
      </>
   );
}

export default FaqContent;
