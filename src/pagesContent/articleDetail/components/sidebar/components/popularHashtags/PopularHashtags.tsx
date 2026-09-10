import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typography/Typography";

import {
   POPULAR_HASHTAGS,
   POPULAR_HASHTAGS_HEADING,
} from "./PopularHashtags.consts";

import styles from "./PopularHashtags.module.scss";

function PopularHashtags() {
   return (
      <div className={styles.popularHashtags}>
         <Typography variant="heading-8" as="h4">
            {POPULAR_HASHTAGS_HEADING}
         </Typography>

         <ul className={styles.list}>
            {POPULAR_HASHTAGS.map((hashtag: string) => (
               <li key={hashtag}>
                  <Tag variant="caption-3">{hashtag}</Tag>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default PopularHashtags;
