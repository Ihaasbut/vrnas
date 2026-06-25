"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.scss";
import { NavLink, NavProps } from "./Nav.types";
import cn from "classnames";
import Typography from "@/components/typography/Typography";
import NavLinkChildren from "./components/nav-link-children/NavLinkChildren";
import HeaderArrowIcon from "@/components/icons/social/HeaderArrowIcon";

function Nav({ navLinks }: NavProps) {
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
         {navLinks.map((link: NavLink) =>
            link.children ? (
               <div key={link.title} className={styles.linkWrapper}>
                  <button
                     className={cn(styles.link, "default-link")}
                     onClick={toggleDropdown}
                  >
                     <Typography variant="body-1" as="span">
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
                  <Typography key={link.title} variant="body-1" as="span">
                     {link.title}
                  </Typography>
               </Link>
            ),
         )}
      </div>
   );
}

export default Nav;
