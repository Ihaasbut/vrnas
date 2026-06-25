import { NavProps } from "./Nav.types";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import TelephoneIcon from "@/components/icons/TelephoneIcon";

export const NAV_SECTIONS: NavProps = {
   sections: [
      {
         title: "Quicklinks",
         links: [
            {
               title: "Home",
               href: "/",
            },
            {
               title: "Pricing Plan",
               href: "/about",
            },
            {
               title: "Service",
               href: "/contact",
            },
            {
               title: "Blog",
               href: "/about",
            },
            {
               title: "Our Team",
               href: "/contact",
            },
         ],
      },
      {
         title: "Support",
         links: [
            {
               title: "About us",
               href: "/",
            },
            {
               title: "Contact us",
               href: "/about",
            },
            {
               title: "FAQ",
               href: "/contact",
            },
            {
               title: "Tems & Conditions",
               href: "/about",
            },
            {
               title: "Privacy Policy",
               href: "/contact",
            },
         ],
      },
      {
         title: "Need Help?",
         links: [
            {
               title: "Tanjung Sari Street no.48, Pontianak City",
               href: "/",
               icon: LocationIcon,
            },
            {
               title: "Support@VRNas.com",
               href: "/about",
               icon: MailIcon,
            },
            {
               title: "+123 456 7890",
               href: "/contact",
               icon: TelephoneIcon,
            },
         ],
      },
   ],
};
