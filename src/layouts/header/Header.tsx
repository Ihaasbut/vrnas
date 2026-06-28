"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/logo.webp";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";
import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import { HEADER_BUTTON_TEXT, HEADER_SCROLL_OFFSET } from "./Header.consts";
import Nav from "./components/nav/Nav";
import { NAV_LINKS } from "./components/nav/Nav.consts";
import Container from "@/components/container/Container";
import BurgerMenu from "./components/burger-menu/BurgerMenu";

function Header() {
   const { isDesktop } = useClientBreakpoint();
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
               <Link href="/">
                  <Image src={Logo} alt="Логотип" className={styles.logo} />
               </Link>

               {isDesktop && <Nav navLinks={NAV_LINKS.navLinks} />}

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
