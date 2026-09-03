import BlockTitle from "@/components/titles/block-title/BlockTitle";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import ContentArticles from "./components/content/ContentArticles";
import PopularArticles from "./components/popularArticles/PopularArticles";
import { OUR_ARTICLES_TITLE } from "./OurArticles.consts";

import styles from "./OurArticles.module.scss";

function OurArticles() {
   return (
      <section className={styles.ourArticles}>
         <Container>
            <div className={styles.inner}>
               <div className={styles.heading}>
                  <BlockTitle data={OUR_ARTICLES_TITLE} />
               </div>

               <div className={styles.articles}>
                  <div className={styles.popular}>
                     <PopularArticles />
                  </div>
                  <div className={styles.content}>
                     <ContentArticles />
                  </div>
               </div>

               <Button variant="outline" className={styles.seeAll}>
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
