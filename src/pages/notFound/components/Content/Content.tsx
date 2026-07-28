import Image from "next/image";

import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import TitleText from "@/components/titleText/TitleText";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import { CONTENT_DATA } from "./Content.consts";

import styles from "./Content.module.scss";

function Content() {
   const { isDesktop } = useClientBreakpoint();
   const inlinePadding = !isDesktop ? "16px 0" : "60px 0";

   const { section, title, sections, image, imageAlt, buttonText } =
      CONTENT_DATA;

   const blockTitleData: BlockTitleData = {
      section,
      title,
   };

   return (
      <section className={styles.wrapper}>
         <Container inlinePadding={inlinePadding}>
            <div className={styles.inner}>
               <div className={styles.left}>
                  <BlockTitle data={blockTitleData} />

                  <div className={styles.sections}>
                     {sections.map((item, index) => (
                        <TitleText key={item.text?.[0] ?? index} data={item} />
                     ))}

                     <Button
                        variant="fill"
                        onClick={() => console.log("click")}
                     >
                        <Typography variant="button-1" as="span">
                           {buttonText}
                        </Typography>
                     </Button>
                  </div>
               </div>

               <div className={styles.right}>
                  <Image src={image} alt={imageAlt} />
               </div>
            </div>
         </Container>
      </section>
   );
}

export default Content;
