import MenSidesWrapper from "@/components/menSidesWrapper/MenSidesWrapper";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import PageTitle from "@/components/titles/page-title/PageTitle";

import Privacy from "./privacy/Privacy";
import { PRIVACY_PAGE_TITLE } from "./PrivacyContent.consts";

import styles from "./PrivacyContent.module.scss";

function PrivacyContent() {
   return (
      <div className={styles.privacyContent}>
         <PageTitle data={PRIVACY_PAGE_TITLE} />
         <MenSidesWrapper>
            <Privacy />
         </MenSidesWrapper>
         <Newsletter />
      </div>
   );
}

export default PrivacyContent;
