import Link from "next/link";
import cn from "classnames";

import Typography from "@/components/ui/typography/Typography";
import { useIsNavLinkActive } from "@/hooks/useIsNavLinkActive";

import { NavLinkChild, NavLinkChildrenProps } from "./NavLinkChildren.types";

import styles from "./NavLinkChildren.module.scss";

function NavLinkChildren({
   childrenLinks,
   dropdownRef,
   isOpen,
   onClick,
}: NavLinkChildrenProps) {
   const isNavLinkActive = useIsNavLinkActive();

   return (
      <div
         ref={dropdownRef}
         className={cn(
            styles.children,
            {
               [styles.open]: isOpen,
            },
            "border-brand",
         )}
      >
         {childrenLinks.map((linkChild: NavLinkChild) => {
            const isActive = isNavLinkActive(linkChild.href);

            return (
               <Link
                  href={linkChild.href}
                  key={linkChild.title}
                  className={cn(styles.child, "default-link")}
                  onClick={onClick}
               >
                  <Typography
                     variant="body-1"
                     as="span"
                     className={cn(isActive && "text-linear")}
                  >
                     {linkChild.title}
                  </Typography>
               </Link>
            );
         })}
      </div>
   );
}

export default NavLinkChildren;
