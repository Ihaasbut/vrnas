import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typography/Typography";

import { ARTICLES_READ_MORE } from "../../Articles.consts";

import { ArticleCardProps } from "./ArticleCard.types";

import styles from "./ArticleCard.module.scss";

function ArticleCard({ article }: ArticleCardProps) {
   return (
      <Link
         href={article.link}
         className={cn(styles.card, "border-white-fade")}
      >
         <Image
            src={article.image}
            alt={article.title}
            className={styles.image}
         />

         <div className={styles.content}>
            <Tag variant="caption-2">{article.tag}</Tag>

            <Typography variant="heading-9" as="h3">
               {article.title}
            </Typography>

            <Typography
               variant="button-1"
               as="span"
               className={cn(styles.readMore, "text-linear")}
            >
               {ARTICLES_READ_MORE}
            </Typography>
         </div>
      </Link>
   );
}

export default ArticleCard;
