"use client";

import Link from "next/link";
import cn from "classnames";
import Typography from "@/components/typography/Typography";

import styles from "./NavLinkChildren.module.scss";
import { NavLinkChild, NavLinkChildrenProps } from "./NavLinkChildren.types";

function NavLinkChildren({
   childrenLinks,
   dropdownRef,
   isOpen,
   onClick,
}: NavLinkChildrenProps) {
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
         {childrenLinks.map((linkChild: NavLinkChild) => (
            <Link
               href={linkChild.href}
               key={linkChild.title}
               className={cn(styles.child, "default-link")}
               onClick={onClick}
            >
               <Typography variant="body-1" as="span">
                  {linkChild.title}
               </Typography>
            </Link>
         ))}
      </div>
   );
}

export default NavLinkChildren;
