"use client";

import cn from "classnames";

import Container from "@/components/ui/container/Container";
import MailIcon from "@/components/ui/icons/MailIcon";
import NewsletterIcon from "@/components/ui/icons/NewsletterIcon";
import Typography from "@/components/ui/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import { NEWSLETTER_DATA_CONFIG } from "./Newsletter.consts";

import styles from "./Newsletter.module.scss";
import typographyStyles from "@/components/ui/typography/Typography.module.scss";

function Newsletter() {
   const { isDesktop } = useClientBreakpoint();
   const currentHeading = isDesktop ? "heading-3" : "heading-6";
   const { title, placeholder } = NEWSLETTER_DATA_CONFIG;

   return (
      <Container>
         <section className={styles.newsletter}>
            <div className={styles.left}>
               <Typography variant={currentHeading}>{title}</Typography>
            </div>

            <div className={styles.right}>
               <form className={styles.form}>
                  <span className={styles.mailIcon}>
                     <MailIcon />
                  </span>

                  <input
                     type="email"
                     name="email"
                     placeholder={placeholder}
                     className={cn(styles.input, typographyStyles["body-3"])}
                     required
                  />

                  <button type="submit" className={styles.button}>
                     <NewsletterIcon />
                  </button>
               </form>
            </div>
         </section>
      </Container>
   );
}

export default Newsletter;
