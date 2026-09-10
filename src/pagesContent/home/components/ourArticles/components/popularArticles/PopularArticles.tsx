"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@/components/ui/button/Button";
import ArrowNextIcon from "@/components/ui/icons/ArrowNextIcon";
import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typography/Typography";
import { ARTICLES_DATA } from "@/pagesContent/blog/components/articles/Articles.consts";
import { Article } from "@/pagesContent/blog/components/articles/Articles.types";

import {
   POPULAR_ARTICLES_HEADING,
   POPULAR_ARTICLES_LIMIT,
} from "./PopularArticles.consts";

import styles from "./PopularArticles.module.scss";

import "swiper/css";
import "swiper/css/pagination";

function PopularArticles() {
   const data = [...ARTICLES_DATA]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, POPULAR_ARTICLES_LIMIT);

   return (
      <div className={styles.popularArticles}>
         <Typography variant="heading-6" as="h3">
            {POPULAR_ARTICLES_HEADING}
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
               {data.map((article: Article) => (
                  <SwiperSlide key={article.id}>
                     <div className={styles.card}>
                        <Image
                           src={article.image}
                           alt={article.title}
                           className={styles.image}
                        />

                        <div className={styles.overlay}>
                           <div className={styles.content}>
                              <Tag variant="caption-2">{article.tag}</Tag>

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
