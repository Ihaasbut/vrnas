import FacebookIcon from "@/components/ui/icons/social/FacebookIcon";
import GithubIcon from "@/components/ui/icons/social/GithubIcon";
import InstagramIcon from "@/components/ui/icons/social/InstagramIcon";
import TwitterIcon from "@/components/ui/icons/social/TwitterIcon";

import { SocialMediaProps } from "./SocialMedia.types";

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
