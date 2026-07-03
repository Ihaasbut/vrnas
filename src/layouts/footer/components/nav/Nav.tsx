import Link from "next/link";
import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";

import { NavLink, NavLinkSection, NavProps } from "./Nav.types";

import styles from "./Nav.module.scss";

function Nav({ sections }: NavProps) {
   return (
      <div className={styles.sections}>
         {sections.map((section: NavLinkSection) => (
            <div key={section.title} className={styles.section}>
               <Typography variant="heading-10" as={"h3"}>
                  {section.title}
               </Typography>

               <ul className={styles.links}>
                  {section.links.map((link: NavLink) => {
                     const Icon = link.icon;

                     return (
                        <li key={link.title}>
                           <Link
                              href={link.href}
                              className={cn(styles.link, "default-link")}
                           >
                              {Icon && <Icon />}

                              <Typography variant="body-1" as={"span"}>
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
