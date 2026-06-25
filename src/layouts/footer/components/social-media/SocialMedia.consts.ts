import { SocialMediaProps } from "./SocialMedia.types";

import GithubIcon from "@/components/icons/social/GithubIcon";
import FacebookIcon from "@/components/icons/social/FacebookIcon";
import TwitterIcon from "@/components/icons/social/TwitterIcon";
import InstagramIcon from "@/components/icons/social/InstagramIcon";

export const SOCIAL_MEDIA_ITEMS: SocialMediaProps = {
   socials: [
      {
         icon: TwitterIcon,
         href: "https://twitter.com/your_username",
      },
      {
         icon: FacebookIcon,
         href: "https://facebook.com/your_username",
      },
      {
         icon: InstagramIcon,
         href: "https://instagram.com/your_username",
      },
      {
         icon: GithubIcon,
         href: "https://github.com/your_username",
      },
   ],
};
