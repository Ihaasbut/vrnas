import TeamWorker from "@/components/teamWorker/TeamWorker";
import { TEAM_WORKERS_DATA } from "@/components/teamWorker/TeamWorker.consts";
import BlockTitle from "@/components/titles/block-title/BlockTitle";
import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import Container from "@/components/ui/container/Container";

import { TEAM_WORKERS_SECTION_DATA } from "./TeamWorkers.consts";

import styles from "./TeamWorkers.module.scss";

function TeamWorkers() {
   const { section, title } = TEAM_WORKERS_SECTION_DATA;

   const blockTitleData: BlockTitleData = {
      section,
      title,
   };

   return (
      <section className={styles.teamWorkers}>
         <Container>
            <BlockTitle data={blockTitleData} isCenter />

            <div className={styles.teamWorkersList}>
               {TEAM_WORKERS_DATA.map((worker) => (
                  <TeamWorker
                     key={worker.fullName}
                     image={worker.image}
                     fullName={worker.fullName}
                     position={worker.position}
                  />
               ))}
            </div>
         </Container>
      </section>
   );
}

export default TeamWorkers;
