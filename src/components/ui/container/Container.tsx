import cn from "classnames";

import { ContainerProps } from "./Container.types";

import styles from "./Container.module.scss";

function Container({ children, inlinePadding }: ContainerProps) {
   return (
      <div
         className={cn(
            styles.container,
            inlinePadding && styles[inlinePadding],
         )}
      >
         {children}
      </div>
   );
}

export default Container;
