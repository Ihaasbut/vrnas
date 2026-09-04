import MenSidesWrapper from "@/components/menSidesWrapper/MenSidesWrapper";
import Faq from "@/components/sections/faq/Faq";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import PageTitle from "@/components/titles/page-title/PageTitle";

import { FAQ_PAGE_DATA, FAQ_PAGE_TITLE } from "./FaqContent.consts";

function FaqContent() {
   return (
      <>
         <PageTitle data={FAQ_PAGE_TITLE} />
         <MenSidesWrapper>
            <Faq data={FAQ_PAGE_DATA} isCenter page="faq" />
         </MenSidesWrapper>
         <Newsletter />
      </>
   );
}

export default FaqContent;
