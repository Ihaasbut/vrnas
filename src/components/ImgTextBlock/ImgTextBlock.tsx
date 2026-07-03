import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import cn from "classnames";

import ArcGlow from "../ui/arc-glow/ArcGlow";
import BlockTitle from "../titles/block-title/BlockTitle";
import Video from "../video/Video";

import styles from "./ImgTextBlock.module.scss";

export type ImgTextBlockProps = {
   children: ReactNode;
   image: StaticImageData;
   title: string;
   description: string;
   isReverse?: boolean;
   isReverseVideo?: boolean;
   bgClassName?: string;
};

function ImgTextBlock({
   children,
   image,
   title,
   description,
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

               <Video
                  className={cn(
                     styles.video,
                     isReverseVideo && styles.reverseVideo,
                  )}
               />
            </div>
         </div>

         <div className={styles.right}>
            <BlockTitle title={title} description={description} />

            {children}
         </div>
      </div>
   );
}

export default ImgTextBlock;
