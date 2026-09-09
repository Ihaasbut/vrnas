import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typography/Typography";

import { RecentArticlesListProps } from "./RecentArticlesList.types";

import styles from "./RecentArticlesList.module.scss";

function RecentArticlesList({ articles }: RecentArticlesListProps) {
   return (
      <ul className={styles.list}>
         {articles.map((article) => (
            <li key={article.id}>
               <Link href={article.link} className={styles.item}>
                  <Image
                     src={article.image}
                     alt={article.title}
                     className={styles.thumb}
                  />

                  <div className={styles.itemContent}>
                     <Tag variant="caption-3">{article.tag}</Tag>

                     <Typography variant="body-4" as="h5">
                        {article.title}
                     </Typography>
                  </div>
               </Link>
            </li>
         ))}
      </ul>
   );
}

export default RecentArticlesList;
