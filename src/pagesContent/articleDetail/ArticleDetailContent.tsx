import Newsletter from "@/components/sections/newsletter/Newsletter";
import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";
import Container from "@/components/ui/container/Container";

import Article from "./components/article/Article";
import Sidebar from "./components/sidebar/Sidebar";
import { ARTICLE_DETAIL_BREADCRUMBS } from "./ArticleDetailContent.consts";
import { ArticleDetailContentProps } from "./ArticleDetailContent.types";

import styles from "./ArticleDetailContent.module.scss";

function ArticleDetailContent({ article }: ArticleDetailContentProps) {
   const { title } = article;

   return (
      <section className={styles.articleDetail}>
         <Container>
            <Breadcrumbs
               breadcrumbs={[
                  ...ARTICLE_DETAIL_BREADCRUMBS,
                  { title, link: "" },
               ]}
            />

            <div className={styles.layout}>
               <Article article={article} />
               <Sidebar currentArticleId={article.id} />
            </div>
         </Container>
         <Newsletter />
      </section>
   );
}

export default ArticleDetailContent;
