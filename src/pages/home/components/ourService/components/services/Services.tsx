"use client";

import Image from "next/image";
import cn from "classnames";

import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";

import { SERVICES_DATA } from "./Services.consts";
import { Service } from "./Services.types";

import styles from "./Services.module.scss";

function Services() {
   return (
      <div className={styles.services}>
         {SERVICES_DATA.services.map((service: Service) => {
            return (
               <div
                  className={cn(styles.service, "border-white-fade")}
                  key={service.title}
               >
                  <Image src={service.icon} alt={service.title} />

                  <div className={styles.text}>
                     <Typography variant="heading-7" as="h5">
                        {service.title}
                     </Typography>

                     <Typography variant="body-2" as="p">
                        {service.description}
                     </Typography>
                  </div>

                  <div className={cn(styles.cta, "border-brand")}>
                     <Button
                        variant="outline"
                        onClick={() => {}}
                        className={styles.ctaButton}
                     >
                        <Typography variant="button-1" as="span">
                           Изучить больше
                        </Typography>
                     </Button>
                  </div>
               </div>
            );
         })}
      </div>
   );
}

export default Services;
