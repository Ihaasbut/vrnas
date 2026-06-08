import Button from "@/components/button/Button";
import styles from "./HomeContent.module.scss";

function HomeContent() {
    return (
        <div>
            <h1 className={styles.title}>Hello World</h1>
            <Button />
        </div>
    );
}

export default HomeContent;
