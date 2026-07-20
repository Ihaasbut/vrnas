"use client";

import cn from "classnames";

import Button from "@/components/ui/button/Button";
import Typography from "@/components/ui/typography/Typography";

import { TABLO_CONFIG } from "./Tablo.consts";
import { TabloProps } from "./Tablo.types";

import styles from "./Tablo.module.scss";

function Tablo({ className }: TabloProps) {
   return (
      <div className={cn(styles.tablo, "border-brand", className)}>
         <div className={styles.price}>
            <Typography variant="caption-2" as={"span"}>
               {TABLO_CONFIG.headerText}
            </Typography>

            <Typography variant="heading-2" as={"h4"}>
               {TABLO_CONFIG.price}
            </Typography>
         </div>

         <Button variant="fill" onClick={() => {}}>
            <Typography variant="button-1" as={"span"}>
               {TABLO_CONFIG.buttonText}
            </Typography>
         </Button>

         <Typography variant="body-4" as={"p"}>
            {TABLO_CONFIG.guarantee}
         </Typography>
      </div>
   );
}

export default Tablo;
