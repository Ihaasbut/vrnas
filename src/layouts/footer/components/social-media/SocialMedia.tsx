import cn from "classnames";

import { SocialMediaEl, SocialMediaProps } from "./SocialMedia.types";

import styles from "./SocialMedia.module.scss";

function SocialMedia({ data }: SocialMediaProps) {
   const { socials } = data;

   return (
      <div className={styles.socials}>
         {socials.map((social: SocialMediaEl) => {
            const Icon = social.icon;

            return (
               <a
                  href={social.href}
                  key={social.href}
                  className={cn("border-brand-circle", styles.social)}
               >
                  <Icon />
               </a>
            );
         })}
      </div>
   );
}

export default SocialMedia;
