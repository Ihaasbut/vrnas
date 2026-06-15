import styles from "./Button.module.scss";
import cn from "classnames";
import { ButtonProps } from "./Button.types";

function Button({ children, variant, onClick }: ButtonProps) {
    return (
        <button
            className={cn(styles.button, styles[variant], "border-brand")}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
