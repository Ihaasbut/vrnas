import cn from "classnames";

import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

function Button({
   children,
   variant,
   onClick,
   isSkipPadding = false,
   className = "",
}: ButtonProps) {
   return (
      <button
         className={cn(
            styles.button,
            styles[variant],
            "border-brand",
            className,
         )}
         onClick={onClick}
         style={{ ...(isSkipPadding && { padding: 0 }) }}
      >
         {children}
      </button>
   );
}

export default Button;
