import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import Logo from "@/assets/images/logo.webp";
import Container from "@/components/ui/container/Container";

import Copyright from "./components/copyright/Copyright";
import { COPYRIGHT_DATA } from "./components/copyright/Copyright.consts";
import { CopyrightData } from "./components/copyright/Copyright.types";
import Nav from "./components/nav/Nav";
import SocialMedia from "./components/social-media/SocialMedia";
import { SOCIAL_MEDIA_ITEMS } from "./components/social-media/SocialMedia.consts";
import { SocialMediaData } from "./components/social-media/SocialMedia.types";

import styles from "./Footer.module.scss";

function Footer() {
   const { text } = COPYRIGHT_DATA;
   const socialMediaData: SocialMediaData = {
      socials: SOCIAL_MEDIA_ITEMS,
   };

   const copyrightData: CopyrightData = {
      text,
   };

   return (
      <section className={styles.footer}>
         <Container>
            <div className={cn(styles.content, "border-brand")}>
               <div className={styles.left}>
                  <Link href="/">
                     <Image src={Logo} alt="Логотип" className={styles.logo} />
                  </Link>

                  <SocialMedia data={socialMediaData} />
               </div>

               <Nav />
            </div>

            <Copyright data={copyrightData} />
         </Container>
      </section>
   );
}

export default Footer;
