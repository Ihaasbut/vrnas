import Features from "@/components/features/Features";
import { FEATURES_DATA } from "@/components/features/Features.consts";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Container from "@/components/ui/container/Container";

import { WHY_CHOOSE_US_FEATURES_DATA } from "./WhyChooseUsFeatures.consts";

import styles from "./WhyChooseUsFeatures.module.scss";

function WhyChooseUsFeatures() {
   return (
      <section className={styles.wrapper}>
         <Container>
            <div className={styles.inner}>
               <BlockTitle data={WHY_CHOOSE_US_FEATURES_DATA} isCenter />
               <Features data={FEATURES_DATA} />
            </div>
         </Container>
      </section>
   );
}

export default WhyChooseUsFeatures;
