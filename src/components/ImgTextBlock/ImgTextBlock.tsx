import Image from "next/image";
import cn from "classnames";

import BlockTitle from "../titles/block-title/BlockTitle";
import ArcGlow from "../ui/arc-glow/ArcGlow";
import MiniVideo from "../video/mini-video/MiniVideo";

import { ImgTextBlockProps } from "./ImgTextBlock.types";

import styles from "./ImgTextBlock.module.scss";

function ImgTextBlock({
   children,
   image,
   section,
   title,
   isReverse = false,
   isReverseVideo = false,
   bgClassName = "",
}: ImgTextBlockProps) {
   return (
      <div className={cn(styles.main, isReverse && styles.reverse)}>
         <div className={styles.left}>
            <div className={cn(styles.leftWrapper, bgClassName)}>
               <ArcGlow className={styles.arcGlow} />

               <div className={styles.image}>
                  <Image src={image} alt="string" className={styles.imageMan} />
               </div>

               <MiniVideo
                  className={cn(
                     styles.video,
                     isReverseVideo && styles.reverseVideo,
                  )}
               />
            </div>
         </div>

         <div className={styles.right}>
            <BlockTitle section={section} title={title} />

            {children}
         </div>
      </div>
   );
}

export default ImgTextBlock;
