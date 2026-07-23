"use client";

import { useState } from "react";
import Link from "next/link";
import cn from "classnames";

import HeaderArrowIcon from "@/components/ui/icons/social/HeaderArrowIcon";
import Typography from "@/components/ui/typography/Typography";
import { useIsNavLinkActive } from "@/hooks/useIsNavLinkActive";

import { NavLink, NavProps } from "./Nav.types";

import styles from "./Nav.module.scss";

function Nav({ navLinks, isOpen, onLinkClick }: NavProps) {
   const isNavLinkActive = useIsNavLinkActive();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   if (!isOpen && isDropdownOpen) {
      setIsDropdownOpen(false);
   }

   const toggleDropdown = () => {
      setIsDropdownOpen((state) => !state);
   };

   return (
      <div
         className={cn(styles.nav, {
            [styles.open]: isOpen,
         })}
      >
         {navLinks.map((link: NavLink) => {
            const isParentActive = link.children
               ? link.children.some((child) => isNavLinkActive(child.href))
               : false;
            const isActive = isNavLinkActive(link.href);

            return link.children ? (
               <div key={link.title} className={styles.linkWrapper}>
                  <button
                     className={cn(styles.link, "default-link")}
                     onClick={toggleDropdown}
                  >
                     <Typography
                        variant="body-1"
                        as="span"
                        className={cn(isParentActive && "text-linear")}
                     >
                        {link.title}
                     </Typography>

                     <HeaderArrowIcon
                        className={cn(styles.arrowIcon, {
                           [styles.arrowOpen]: isDropdownOpen,
                        })}
                     />
                  </button>

                  <div
                     className={cn(styles.children, {
                        [styles.open]: isDropdownOpen,
                     })}
                  >
                     <div className={styles.childrenInner}>
                        {link.children.map((child) => {
                           const isChildActive = isNavLinkActive(child.href);

                           return (
                              <Link
                                 href={child.href}
                                 key={child.title}
                                 className="default-link"
                                 onClick={onLinkClick}
                              >
                                 <Typography
                                    variant="body-1"
                                    as="span"
                                    className={cn(
                                       isChildActive && "text-linear",
                                    )}
                                 >
                                    {child.title}
                                 </Typography>
                              </Link>
                           );
                        })}
                     </div>
                  </div>
               </div>
            ) : (
               <Link
                  href={link.href}
                  className={cn(styles.link, "default-link")}
                  key={link.title}
                  onClick={onLinkClick}
               >
                  <Typography
                     variant="body-1"
                     as="span"
                     className={cn(isActive && "text-linear")}
                  >
                     {link.title}
                  </Typography>
               </Link>
            );
         })}
      </div>
   );
}

export default Nav;
