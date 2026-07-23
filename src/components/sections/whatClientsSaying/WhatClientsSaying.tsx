"use client";

import { useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";

import BlockTitle from "../../titles/block-title/BlockTitle";
import Container from "../../ui/container/Container";

import TestimonialClient from "./testimonial-client/TestimonialClient";
import { TestimonialClientData } from "./testimonial-client/TestimonialClient.types";
import {
   WHAT_CLIENTS_SAYING_DATA,
   WHAT_CLIENTS_SAYING_IMAGE,
} from "./WhatClientsSaying.consts";

import styles from "./WhatClientsSaying.module.scss";

function WhatClientsSaying() {
   const { section, title, imageAlt, testimonials } = WHAT_CLIENTS_SAYING_DATA;
   const blockTitleData: BlockTitleData = {
      section,
      title,
   };
   const [activeClientId, setActiveClientId] = useState(testimonials[0].id);

   return (
      <section className={styles.whatClientsSaying}>
         <Container>
            <BlockTitle data={blockTitleData} isCenter />
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
               {testimonials.map((client) => {
                  const clientData: TestimonialClientData = {
                     client,
                  };

                  return (
                     <TestimonialClient
                        key={client.id}
                        data={clientData}
                        isActive={client.id === activeClientId}
                        onActivate={setActiveClientId}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
}

export default WhatClientsSaying;
