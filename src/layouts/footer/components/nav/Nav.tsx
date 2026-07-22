"use client";

import Link from "next/link";
import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";
import { useIsNavLinkActive } from "@/hooks/useIsNavLinkActive";

import { NAV_SECTIONS } from "./Nav.consts";

import styles from "./Nav.module.scss";

function Nav() {
   const isNavLinkActive = useIsNavLinkActive();

   return (
      <div className={styles.sections}>
         {NAV_SECTIONS.map((section) => (
            <div key={section.title} className={styles.section}>
               <Typography variant="heading-10" as={"h3"}>
                  {section.title}
               </Typography>

               <ul className={styles.links}>
                  {section.links.map((link) => {
                     const Icon = link.icon;
                     const isActive = isNavLinkActive(link.href);

                     return (
                        <li key={link.title}>
                           <Link
                              href={link.href}
                              className={cn(styles.link, "default-link")}
                           >
                              {Icon && <Icon />}

                              <Typography
                                 variant="body-1"
                                 as={"span"}
                                 className={cn(isActive && "text-linear")}
                              >
                                 {link.title}
                              </Typography>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </div>
         ))}
      </div>
   );
}

export default Nav;
