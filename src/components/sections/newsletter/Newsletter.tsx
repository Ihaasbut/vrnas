"use client";

import { SubmitEvent, useState } from "react";
import cn from "classnames";

import Container from "@/components/ui/container/Container";
import MailIcon from "@/components/ui/icons/MailIcon";
import NewsletterIcon from "@/components/ui/icons/NewsletterIcon";
import Typography from "@/components/ui/typography/Typography";

import { NEWSLETTER_DATA } from "./Newsletter.consts";

import styles from "./Newsletter.module.scss";
import typographyStyles from "@/components/ui/typography/Typography.module.scss";

function Newsletter() {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const { title, placeholder, successMessage } = NEWSLETTER_DATA;

   const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitted(true);
   };

   return (
      <Container>
         <section className={styles.newsletter}>
            <div className={styles.left}>
               <Typography
                  variant="heading-3"
                  as="p"
                  className={styles.headingDesktop}
               >
                  {title}
               </Typography>
               <Typography
                  variant="heading-6"
                  as="p"
                  className={styles.headingMobile}
               >
                  {title}
               </Typography>
            </div>

            <div className={styles.right}>
               {isSubmitted ? (
                  <Typography
                     variant="body-3"
                     as="p"
                     className={styles.success}
                  >
                     {successMessage}
                  </Typography>
               ) : (
                  <form
                     className={styles.form}
                     method="post"
                     onSubmit={handleSubmit}
                  >
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
               )}
            </div>
         </section>
      </Container>
   );
}

export default Newsletter;
