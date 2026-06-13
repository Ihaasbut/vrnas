import styles from "./Button.module.scss";
import cn from "classnames";
import { ReactNode } from "react";

type ButtonVariant = "fill" | "outline" | "ghost";

type ButtonProps = {
    variant: ButtonVariant;
    children: ReactNode;
    onClick?: () => void;
};

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
