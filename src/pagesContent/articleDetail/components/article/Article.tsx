import Image from "next/image";
import cn from "classnames";

import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typography/Typography";

import PostTags from "./components/postTags/PostTags";
import { ArticleProps } from "./Article.types";

import styles from "./Article.module.scss";

function Article({ article }: ArticleProps) {
   const { title, tag, image, texts, postTags, author, date } = article;
   return (
      <article className={styles.article}>
         <Tag variant="caption-2">{tag}</Tag>

         <Typography
            variant="heading-3"
            as="h2"
            className={styles.headingDesktop}
         >
            {title}
         </Typography>
         <Typography
            variant="heading-5"
            as="h2"
            className={styles.headingMobile}
         >
            {title}
         </Typography>

         <Typography
            variant="caption-1"
            as="p"
            className={cn(styles.meta, "text-linear")}
         >
            {author} | {date}
         </Typography>

         <Image src={image} alt={title} className={styles.image} priority />

         <div className={styles.body}>
            {texts.map((paragraph, index) => (
               <Typography key={paragraph + index} variant="body-1" as="p">
                  {paragraph}
               </Typography>
            ))}
         </div>

         <PostTags tags={postTags} />
      </article>
   );
}

export default Article;
