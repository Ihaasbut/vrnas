"use client";

import { usePathname } from "next/navigation";

export function useIsNavLinkActive() {
   const pathname = usePathname();

   return (href: string) => {
      if (!pathname) {
         return false;
      }

      if (href === "/") {
         return pathname === "/";
      }

      return pathname === href || pathname.startsWith(`${href}/`);
   };
}
