import Button from "@/components/button/Button";
import styles from "./HomeContent.module.scss";

import cn from "classnames";

function HomeContent() {
    return (
        <div>
            <h1 className={cn(styles.title, "border-linear-2")}>Hello World</h1>
            <Button />
        </div>
    );
}

export default HomeContent;
