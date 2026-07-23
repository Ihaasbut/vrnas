import Image from "next/image";

import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Container from "@/components/ui/container/Container";

import {
   OUR_TRUSTED_PARTNERS_DATA,
   OUR_TRUSTED_PARTNERS_IMAGE,
} from "./OurTrustedPartners.consts";
import { OurTrustedPartnersProps } from "./OurTrustedPartners.types";

import styles from "./OurTrustedPartners.module.scss";

function OurTrustedPartners({ isCenter = false }: OurTrustedPartnersProps) {
   const { section, title, imageAlt } = OUR_TRUSTED_PARTNERS_DATA;
   const blockTitleData: BlockTitleData = {
      section,
      title,
   };

   return (
      <Container>
         <section className={styles.ourTrustedPartners}>
            <BlockTitle data={blockTitleData} isCenter={isCenter} />

            <div className={styles.imageWrapper}>
               <Image src={OUR_TRUSTED_PARTNERS_IMAGE} alt={imageAlt} />
            </div>
         </section>
      </Container>
   );
}

export default OurTrustedPartners;
