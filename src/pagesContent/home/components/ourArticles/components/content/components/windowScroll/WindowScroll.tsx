import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import Button from "@/components/ui/button/Button";
import ArrowNextIcon from "@/components/ui/icons/ArrowNextIcon";
import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typography/Typography";
import { ARTICLES_DATA } from "@/pagesContent/blog/components/articles/Articles.consts";
import { Article } from "@/pagesContent/blog/components/articles/Articles.types";

import { WINDOW_SCROLL_HEADING } from "./WindowScroll.consts";

import styles from "./WindowScroll.module.scss";

function WindowScroll() {
   const data = ARTICLES_DATA;

   return (
      <div className={cn(styles.windowScroll, "border-white-fade")}>
         <Typography variant="heading-6" as="h3">
            {WINDOW_SCROLL_HEADING}
         </Typography>

         <ul className={styles.list}>
            {data.map((article: Article) => (
               <li key={article.id}>
                  <Link href={article.link} className={styles.item}>
                     <div className={styles.thumbnail}>
                        <Image
                           src={article.image}
                           alt={article.title}
                           fill
                           sizes="140px"
                        />
                     </div>

                     <div className={styles.content}>
                        <Tag variant="caption-2">{article.tag}</Tag>

                        <Typography variant="heading-9" as="h4">
                           {article.title}
                        </Typography>
                     </div>

                     <Button
                        variant="ghost"
                        className={styles.arrow}
                        isSkipPadding={true}
                     >
                        <ArrowNextIcon />
                     </Button>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default WindowScroll;
