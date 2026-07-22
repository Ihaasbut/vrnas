"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import HeaderArrowIcon from "@/components/ui/icons/social/HeaderArrowIcon";
import Typography from "@/components/ui/typography/Typography";
import { useIsNavLinkActive } from "@/hooks/useIsNavLinkActive";

import NavLinkChildren from "./components/nav-link-children/NavLinkChildren";
import { NavLink, NavProps } from "./Nav.types";

import styles from "./Nav.module.scss";

function Nav({ navLinks }: NavProps) {
   const isNavLinkActive = useIsNavLinkActive();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!isDropdownOpen) {
         return;
      }

      const handleClickOutside = (event: MouseEvent) => {
         const target = event.target as Node;

         if (dropdownRef.current?.contains(target)) {
            return;
         }

         setIsDropdownOpen(false);
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
         document.removeEventListener("click", handleClickOutside);
      };
   }, [isDropdownOpen]);

   const toggleDropdown = () => {
      setIsDropdownOpen((state) => !state);
   };

   return (
      <div className={styles.nav}>
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
                           [styles.open]: isDropdownOpen,
                        })}
                     />
                  </button>

                  <NavLinkChildren
                     childrenLinks={link.children}
                     dropdownRef={dropdownRef}
                     isOpen={isDropdownOpen}
                     onClick={() => setIsDropdownOpen(false)}
                  />
               </div>
            ) : (
               <Link
                  href={link.href}
                  className={cn(styles.link, "default-link")}
                  key={link.title}
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
