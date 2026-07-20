import Image from "next/image";

import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Container from "@/components/ui/container/Container";

import {
   OUR_TRUSTED_PARTNERS_DATA,
   OUR_TRUSTED_PARTNERS_IMAGE,
} from "./OurTrustedPartners.consts";

import styles from "./OurTrustedPartners.module.scss";

function OurTrustedPartners() {
   const { section, title, isCenter, imageAlt } = OUR_TRUSTED_PARTNERS_DATA;

   return (
      <Container>
         <section className={styles.ourTrustedPartners}>
            <BlockTitle section={section} title={title} isCenter={isCenter} />

            <div className={styles.imageWrapper}>
               <Image src={OUR_TRUSTED_PARTNERS_IMAGE} alt={imageAlt} />
            </div>
         </section>
      </Container>
   );
}

export default OurTrustedPartners;
