"use client";

import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import styles from "./HomeContent.module.scss";
import Container from "@/components/Container";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

function HomeContent() {
  const { isMobile } = useClientBreakpoint();

  return (
    <div>
      <h1 className='text-linear'>Hello World</h1>

      <div className={styles.buttons}>
        <Button variant='fill'>
          <Typography variant='button-1' as={"span"}>
            Get started
          </Typography>
        </Button>

        <Button variant='outline'>
          <Typography variant='button-1' as={"span"}>
            learn more
          </Typography>
        </Button>

        <Button variant='ghost'>
          <Typography variant='button-2' as={"span"}>
            Contacts
          </Typography>
        </Button>

        <div style={{ backgroundColor: "red" }}>
          <Container inlinePadding={isMobile ? "0" : "120px 0"}>
            <div style={{ backgroundColor: "blue" }}>
              <h1>Hello World</h1>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
