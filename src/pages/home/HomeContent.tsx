"use client";

import Button from "@/components/button/Button";
import Typography from "@/components/typography/Typography";
import styles from "./HomeContent.module.scss";
import Container from "@/components/container/Container";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import PageTitle from "@/components/titles/page-title/PageTitle";
import BlockTitle from "@/components/titles/block-title/BlockTitle";

function HomeContent() {
   const { isDesktop } = useClientBreakpoint();

   const breadcrumbs = [
      {
         title: "Home",
         link: "/",
      },
      {
         title: "About",
         link: "/about",
      },
   ];

   return (
      <Container>
         <PageTitle title="About us" breadcrumbs={breadcrumbs} />

         <BlockTitle
            title="about us"
            description="Bring your events to life like never before with our VR services."
            isCenter
         />

         <div className={styles.buttons}>
            <Button variant="fill" onClick={() => {}}>
               <Typography variant="button-1" as={"span"}>
                  Get started
               </Typography>
            </Button>

            <Button variant="outline" onClick={() => {}}>
               <Typography variant="button-1" as={"span"}>
                  learn more
               </Typography>
            </Button>

            <Button variant="ghost" onClick={() => {}}>
               <Typography variant="button-2" as={"span"}>
                  Contacts
               </Typography>
            </Button>
               <Button variant="ghost" onClick={() => {}}>
                  <Typography variant="button-2" as={"span"}>
                     Contacts
                  </Typography>
               </Button>

               <div style={{ backgroundColor: "red" }}>
                  <Container inlinePadding={!isDesktop ? "0" : "120px 0"}>
                     <div style={{ backgroundColor: "blue" }}>
                        <h1>Hello World</h1>
                     </div>
                  </Container>
               </div>

            <div style={{ backgroundColor: "red" }}>
               <Container inlinePadding={!isDesktop ? "0" : "120px 0"}>
                  <div style={{ backgroundColor: "blue" }}>
                     <h1>Hello World</h1>
                  </div>
               </Container>
            </div>

               <Button variant="ghost" onClick={() => {}} isSkipPadding>
                  <div
                     style={{
                        width: "40px",
                        height: "40px",
                     }}
                  ></div>
               </Button>
            </div>

            <ArcGlow
               config={{
                  width: "300px",
                  height: "300px",
                  left: "20%",
                  top: "0",
               }}
            />
            <Button variant="ghost" onClick={() => {}} isSkipPadding>
               <div
                  style={{
                     width: "40px",
                     height: "40px",
                  }}
               ></div>
            </Button>
         </div>

         <Button variant="ghost" onClick={() => {}} isSkipPadding>
            <div
               style={{
                  width: "40px",
                  height: "40px",
               }}
            ></div>
         </Button>

         <Breadcrumbs breadcrumbs={breadcrumbs} />
      </Container>
   );
}

export default HomeContent;
