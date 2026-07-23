"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import Logo from "@/assets/images/logo.webp";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import BurgerMenu from "./components/burger-menu/BurgerMenu";
import Nav from "./components/nav/Nav";
import { NAV_LINKS_DATA } from "./components/nav/Nav.consts";
import { NavData } from "./components/nav/Nav.types";
import { HEADER_BUTTON_TEXT, HEADER_SCROLL_OFFSET } from "./Header.consts";

import styles from "./Header.module.scss";

function Header() {
   const { isDesktop } = useClientBreakpoint();
   const navData: NavData = {
      navLinks: NAV_LINKS_DATA,
   };
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > HEADER_SCROLL_OFFSET);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div
         className={cn(styles.headerWrapper, {
            [styles.scrolled]: isScrolled,
         })}
      >
         <Container>
            <div className={styles.header}>
               <Link href="/" className={styles.logoLink}>
                  <Image src={Logo} alt="Логотип" className={styles.logo} />
               </Link>

               {isDesktop && <Nav data={navData} />}

               {isDesktop && (
                  <Button variant="ghost" onClick={() => {}}>
                     <Typography variant="button-2" as="span">
                        {HEADER_BUTTON_TEXT}
                     </Typography>
                  </Button>
               )}

               {!isDesktop && <BurgerMenu />}
            </div>
         </Container>
      </div>
   );
}

export default Header;
