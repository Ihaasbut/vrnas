import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import Logo from "@/assets/images/Logo.webp";
import Container from "@/components/container/Container";

import Copyright from "./components/copyright/Copyright";
import { COPYRIGHT_TEXT } from "./components/copyright/Copyright.consts";
import styles from "./Footer.module.scss";
import { SOCIAL_MEDIA_ITEMS } from "./components/social-media/SocialMedia.consts";
import SocialMedia from "./components/social-media/SocialMedia";
import Container from "@/components/container/Container";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.webp";
import Nav from "./components/nav/Nav";
import { NAV_SECTIONS } from "./components/nav/Nav.consts";
import SocialMedia from "./components/social-media/SocialMedia";
import { SOCIAL_MEDIA_ITEMS } from "./components/social-media/SocialMedia.consts";

import styles from "./Footer.module.scss";

function Footer() {
   return (
      <section className={styles.footer}>
         <Container>
            <div className={cn(styles.content, "border-brand")}>
               <div className={styles.left}>
                  <Link href="/">
                     <Image src={Logo} alt="Логотип" className={styles.logo} />
                  </Link>

                  <SocialMedia socials={SOCIAL_MEDIA_ITEMS.socials} />
               </div>

               <Nav sections={NAV_SECTIONS.sections} />
            </div>

            <Copyright text={COPYRIGHT_TEXT} />
         </Container>
      </section>
   );
}

export default Footer;
