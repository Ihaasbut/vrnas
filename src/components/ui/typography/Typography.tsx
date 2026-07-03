import cn from "classnames";

import { TypographyProps } from "./Typography.types";

import styles from "./Typography.module.scss";

function Typography({
   as: Component = "p",
   children,
   className = "",
   variant,
}: TypographyProps) {
   return (
      <Component className={cn(styles[variant], className)}>
         {children}
      </Component>
   );
}

export default Typography;
