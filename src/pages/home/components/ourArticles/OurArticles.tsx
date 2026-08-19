"use client";

import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import ContentArticles from "./components/content/ContentArticles";
import { OUR_ARTICLES_TITLE } from "./OurArticles.consts";

import styles from "./OurArticles.module.scss";

function OurArticles() {
   return (
      <section className={styles.ourArticles}>
         <Container>
            <div className={styles.inner}>
               <div className={styles.title}>
                  <BlockTitle data={OUR_ARTICLES_TITLE} />
               </div>

               <ContentArticles />

               <Button
                  variant="outline"
                  className={styles.seeAll}
                  onClick={() => {}}
               >
                  <Typography variant="button-1" as="span">
                     See All
                  </Typography>
               </Button>
            </div>
         </Container>
      </section>
   );
}

export default OurArticles;
