"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@/components/ui/button/Button";
import ArrowNextIcon from "@/components/ui/icons/ArrowNextIcon";
import Typography from "@/components/ui/typography/Typography";

import { POPULAR_ARTICLES_DATA } from "./PopularArticles.consts";
import { PopularArticle } from "./PopularArticles.types";

import styles from "./PopularArticles.module.scss";

import "swiper/css";
import "swiper/css/pagination";

function PopularArticles() {
   const data = POPULAR_ARTICLES_DATA;

   return (
      <div className={styles.popularArticles}>
         <Typography variant="heading-6" as="h3">
            Popular Article
         </Typography>

         <div className={styles.slider}>
            <Swiper
               modules={[Autoplay, Pagination]}
               slidesPerView={1}
               loop
               pagination={{ clickable: true }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
               }}
            >
               {data.map((article: PopularArticle) => (
                  <SwiperSlide key={article.id}>
                     <div className={styles.card}>
                        <Image
                           src={article.image}
                           alt={article.title}
                           className={styles.image}
                        />

                        <div className={styles.overlay}>
                           <div className={styles.content}>
                              <Typography
                                 variant="caption-2"
                                 as="span"
                                 className={styles.tag}
                              >
                                 {article.tag}
                              </Typography>

                              <Typography variant="heading-9" as="h4">
                                 {article.title}
                              </Typography>
                           </div>

                           <Button
                              variant="ghost"
                              href={article.link}
                              className={styles.arrow}
                              isSkipPadding={true}
                           >
                              <ArrowNextIcon />
                           </Button>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
}

export default PopularArticles;
