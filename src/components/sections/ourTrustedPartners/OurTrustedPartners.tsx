import Image from "next/image";
import cn from "classnames";
import type { CSSProperties } from "react";

import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import {
   OUR_TRUSTED_PARTNERS_DATA,
   OUR_TRUSTED_PARTNERS_IMAGE,
} from "./OurTrustedPartners.consts";
import { OurTrustedPartnersProps } from "./OurTrustedPartners.types";

import styles from "./OurTrustedPartners.module.scss";

function OurTrustedPartners({ isCenter = false }: OurTrustedPartnersProps) {
   const { section, title, imageAlt, clients } = OUR_TRUSTED_PARTNERS_DATA;
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

               <ul className={styles.clients}>
                  {clients.map((client, index) => {
                     const clientStyles = {
                        "--index": index,
                     } as CSSProperties;

                     return (
                        <li
                           key={client.name}
                           className={styles.client}
                           style={clientStyles}
                        >
                           <Typography
                              variant="body-2"
                              className={cn(
                                 styles.badge,
                                 "border-brand-circle",
                              )}
                           >
                              <span>{client.name}</span>
                           </Typography>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </section>
      </Container>
   );
}

export default OurTrustedPartners;
