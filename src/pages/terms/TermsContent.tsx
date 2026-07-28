import MenSidesWrapper from "@/components/menSidesWrapper/MenSidesWrapper";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import PageTitle from "@/components/titles/page-title/PageTitle";

import Terms from "./terms/Terms";
import { TERMS_PAGE_TITLE } from "./TermsContent.consts";

function TermsContent() {
   return (
      <>
         <PageTitle data={TERMS_PAGE_TITLE} />
         <MenSidesWrapper>
            <Terms />
         </MenSidesWrapper>
         <Newsletter />
      </>
   );
}

export default TermsContent;
