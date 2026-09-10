import cn from "classnames";
import type { CSSProperties } from "react";

import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import CheckboxIcon from "@/components/ui/icons/CheckboxIcon";
import Typography from "@/components/ui/typography/Typography";

import ServicesList from "./component/servicesList/ServicesList";
import {
   SERVICE_INFO_BUTTON_HREF,
   SERVICE_INFO_BUTTON_LABEL,
   SERVICE_INFO_ORBITS,
   SERVICE_INFO_SECTION,
} from "./ServiceInfo.consts";
import { ServiceInfoProps } from "./ServiceInfo.types";

import styles from "./ServiceInfo.module.scss";

function ServiceInfo({ service }: ServiceInfoProps) {
   const { title, texts, listTitle, listItems, slug } = service;

   return (
      <section className={styles.serviceInfo}>
         <div
            className={styles.scene}
            style={
               {
                  "--orbit-size": `${SERVICE_INFO_ORBITS[3]}px`,
               } as CSSProperties
            }
         >
            {SERVICE_INFO_ORBITS.map((size) => (
               <span
                  key={size}
                  className={styles.orbit}
                  style={{ width: size, height: size }}
               />
            ))}

            <ServicesList slug={slug} />

            <Container>
               <div className={styles.content}>
                  <BlockTitle
                     data={{ section: SERVICE_INFO_SECTION, title }}
                     isCenter
                  />

                  {texts.map((paragraph) => (
                     <Typography
                        key={paragraph}
                        variant="body-1"
                        as="p"
                        className={styles.paragraph}
                     >
                        {paragraph}
                     </Typography>
                  ))}

                  <div className={cn(styles.features, "border-brand")}>
                     <Typography variant="heading-8" as="h3">
                        {listTitle}
                     </Typography>

                     <ul className={styles.featuresList}>
                        {listItems.map((item) => (
                           <li key={item} className={styles.feature}>
                              <CheckboxIcon />
                              <Typography variant="body-3" as="span">
                                 {item}
                              </Typography>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <Button variant="fill" href={SERVICE_INFO_BUTTON_HREF}>
                     <Typography variant="button-1" as="span">
                        {SERVICE_INFO_BUTTON_LABEL}
                     </Typography>
                  </Button>
               </div>
            </Container>
         </div>
      </section>
   );
}

export default ServiceInfo;
