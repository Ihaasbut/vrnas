import Typography from "@/components/ui/typography/Typography";
import { ARTICLES_DATA } from "@/pagesContent/blog/components/articles/Articles.consts";

import RecentArticlesList from "./components/recentArticlesList/RecentArticlesList";
import {
   RECENT_ARTICLES_HEADING,
   RECENT_ARTICLES_LIMIT,
} from "./RecentArticles.consts";
import { RecentArticlesProps } from "./RecentArticles.types";

import styles from "./RecentArticles.module.scss";

function RecentArticles({ currentArticleId }: RecentArticlesProps) {
   const recentArticles = ARTICLES_DATA.filter(
      (article) => article.id !== currentArticleId,
   ).slice(0, RECENT_ARTICLES_LIMIT);

   return (
      <div className={styles.recentArticles}>
         <Typography variant="heading-8" as="h4">
            {RECENT_ARTICLES_HEADING}
         </Typography>

         <RecentArticlesList articles={recentArticles} />
      </div>
   );
}

export default RecentArticles;
