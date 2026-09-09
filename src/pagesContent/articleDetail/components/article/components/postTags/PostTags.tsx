import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import { POST_TAGS_HEADING } from "./PostTags.consts";
import { PostTagsProps } from "./PostTags.types";

import styles from "./PostTags.module.scss";

function PostTags({ tags }: PostTagsProps) {
   if (tags.length === 0) {
      return null;
   }

   return (
      <div className={styles.postTags}>
         <Typography variant="heading-8" as="h4">
            {POST_TAGS_HEADING}
         </Typography>

         <Typography
            variant="caption-2"
            as="p"
            className={cn(styles.tags, "text-linear")}
         >
            {tags.join(" ")}
         </Typography>
      </div>
   );
}

export default PostTags;
