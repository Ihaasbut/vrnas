"use client";

import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import Button from "@/components/ui/button/Button";

import { NAV_LINKS } from "../nav/Nav.consts";

import Nav from "./components/nav/Nav";

import styles from "./BurgerMenu.module.scss";

function BurgerMenu() {
   const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!isOpen) {
         return;
      }

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleClickOutside = (event: MouseEvent) => {
         const target = event.target as Node;

         if (menuRef.current?.contains(target)) {
            return;
         }

         setIsOpen(false);
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
         document.body.style.overflow = previousOverflow;
         document.removeEventListener("click", handleClickOutside);
      };
   }, [isOpen]);

   const toggleMenu = () => {
      setIsOpen((state) => !state);
   };

   return (
      <div className={styles.wrapper} ref={menuRef}>
         <Button
            variant="ghost"
            onClick={toggleMenu}
            isSkipPadding
            className={styles.burgerButton}
         >
            <div className={styles.burgerMenu}>
               <div
                  className={cn(styles.lines, {
                     [styles.open]: isOpen,
                  })}
               >
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
                  <span className={styles.line}></span>
               </div>
            </div>
         </Button>

         <Nav
            navLinks={NAV_LINKS.navLinks}
            isOpen={isOpen}
            onLinkClick={() => setIsOpen(false)}
         />
      </div>
   );
}

export default BurgerMenu;
