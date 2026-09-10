"use client";

import { Suspense, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Container from "@/components/ui/container/Container";
import Pagination from "@/components/ui/pagination/Pagination";

import ArticleCard from "./components/articleCard/ArticleCard";
import { ARTICLES_DATA, ARTICLES_PER_PAGE } from "./Articles.consts";
import { Article } from "./Articles.types";

import styles from "./Articles.module.scss";

function Articles() {
   return (
      <Suspense>
         <ArticlesList />
      </Suspense>
   );
}

function ArticlesList() {
   const listRef = useRef<HTMLUListElement>(null);
   const router = useRouter();
   const searchParams = useSearchParams();
   const totalPages = Math.ceil(ARTICLES_DATA.length / ARTICLES_PER_PAGE);
   const page = Number(searchParams.get("page")) || 1;
   const articles = ARTICLES_DATA.slice(
      (page - 1) * ARTICLES_PER_PAGE,
      page * ARTICLES_PER_PAGE,
   );

   const handlePageChange = (pageNumber: number) => {
      const href = pageNumber === 1 ? "/blog" : `/blog?page=${pageNumber}`;

      router.push(href, { scroll: false });
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
   };

   return (
      <section className={styles.articles}>
         <Container>
            <ul ref={listRef} className={styles.list}>
               {articles.map((article: Article) => (
                  <li key={article.id}>
                     <ArticleCard article={article} />
                  </li>
               ))}
            </ul>

            <Pagination
               current={page}
               total={totalPages}
               onChange={handlePageChange}
            />
         </Container>
      </section>
   );
}

export default Articles;
