import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import Button from "@/components/ui/button/Button";
import ArrowNextIcon from "@/components/ui/icons/ArrowNextIcon";
import Typography from "@/components/ui/typography/Typography";

import { WINDOW_SCROLL_DATA } from "./WindowScroll.consts";
import { WindowScrollArticle } from "./WindowScroll.types";

import styles from "./WindowScroll.module.scss";

function WindowScroll() {
   const data = WINDOW_SCROLL_DATA;
   return (
      <div className={cn(styles.windowScroll, "border-white-fade")}>
         <Typography variant="heading-6" as="h3">
            Recent Article
         </Typography>

         <ul className={styles.list}>
            {data.map((article: WindowScrollArticle) => (
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
                        <Typography
                           variant="caption-3"
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
