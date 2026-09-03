"use client";

import Link from "next/link";
import cn from "classnames";

import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

function Button({
   children,
   variant,
   onClick,
   href,
   isSkipPadding = false,
   className = "",
}: ButtonProps) {
   const classNames = cn(
      styles.button,
      styles[variant],
      "border-brand",
      className,
   );
   const style = { ...(isSkipPadding && { padding: 0 }) };

   if (href) {
      return (
         <Link href={href} className={classNames} style={style}>
            {children}
         </Link>
      );
   }

   return (
      <button
         type="button"
         className={classNames}
         onClick={onClick}
         style={style}
      >
         {children}
      </button>
   );
}

export default Button;
