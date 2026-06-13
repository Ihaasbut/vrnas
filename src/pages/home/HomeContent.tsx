import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import styles from "./HomeContent.module.scss";

function HomeContent() {
    return (
        <div>
            <h1 className="text-linear">Hello World</h1>

            <div className={styles.buttons}>
                <Button variant="fill">
                    <Typography variant="button-1" as={"span"}>
                        Get started
                    </Typography>
                </Button>

                <Button variant="outline">
                    <Typography variant="button-1" as={"span"}>
                        learn more
                    </Typography>
                </Button>
                
                <Button variant="ghost">
                    <Typography variant="button-2" as={"span"}>
                        Contacts
                    </Typography>
                </Button>
            </div>
        </div>
    );
}

export default HomeContent;
