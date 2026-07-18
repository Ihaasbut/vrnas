"use client";

import { useState } from "react";
import Image from "next/image";
import cn from "classnames";

import BlockTitle from "../titles/block-title/BlockTitle";
import Container from "../ui/container/Container";

import TestimonialClient from "./testimonial-client/TestimonialClient";
import {
   WHAT_CLIENTS_SAYING_DATA,
   WHAT_CLIENTS_SAYING_IMAGE,
} from "./WhatClientsSaying.consts";

import styles from "./WhatClientsSaying.module.scss";

function WhatClientsSaying() {
   const { section, title, imageAlt, testimonials } = WHAT_CLIENTS_SAYING_DATA;
   const [activeClientId, setActiveClientId] = useState(testimonials[0].id);

   return (
      <section className={styles.whatClientsSaying}>
         <Container>
            <BlockTitle section={section} title={title} isCenter />
         </Container>

         <div className={styles.scene}>
            {Array.from({ length: 5 }).map((_, index) => (
               <span
                  key={index}
                  className={cn(styles.orbit, styles[`orbit${index + 1}`])}
               />
            ))}

            <div className={styles.figure}>
               <Image
                  src={WHAT_CLIENTS_SAYING_IMAGE}
                  alt={imageAlt}
                  className={styles.figureImage}
               />
            </div>

            <div className={styles.clientsLayer}>
               {testimonials.map((client) => (
                  <TestimonialClient
                     key={client.id}
                     client={client}
                     isActive={client.id === activeClientId}
                     onActivate={setActiveClientId}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

export default WhatClientsSaying;
