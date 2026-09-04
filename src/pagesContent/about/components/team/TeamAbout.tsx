import cn from "classnames";

import TeamWorker from "@/components/teamWorker/TeamWorker";
import { TEAM_WORKERS_DATA } from "@/components/teamWorker/TeamWorker.consts";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { TEAM_ABOUT_DATA } from "./TeamAbout.consts";

import styles from "./TeamAbout.module.scss";

function TeamAbout() {
   const { section, title, buttonText } = TEAM_ABOUT_DATA;

   const blockTitleData: BlockTitleData = {
      section,
      title,
   };

   const teamWorkers = TEAM_WORKERS_DATA.slice(0, 4);

   return (
      <Container>
         <section className={styles.teamAbout}>
            <div className={styles.heading}>
               <BlockTitle data={blockTitleData} />
            </div>

            <div className={styles.teamWorkers}>
               {teamWorkers.map((worker) => (
                  <TeamWorker
                     key={worker.fullName}
                     image={worker.image}
                     fullName={worker.fullName}
                     position={worker.position}
                  />
               ))}
            </div>

            <Button
               href="/team"
               variant="outline"
               className={cn(styles.button, styles.seeAll)}
            >
               <Typography variant="button-1" as="span">
                  {buttonText}
               </Typography>
            </Button>
         </section>
      </Container>
   );
}

export default TeamAbout;
