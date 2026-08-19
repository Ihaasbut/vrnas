import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";

import { STATS_DATA } from "./Stats.consts";
import { StatsEl } from "./Stats.types";

import styles from "./Stats.module.scss";

function Stats() {
   return (
      <Container>
         <section className={styles.statsWrapper}>
            <div className={styles.statsList}>
               {STATS_DATA.map((stat: StatsEl) => (
                  <div key={stat.label} className={styles.stat}>
                     <Typography
                        variant="caption-1"
                        as="span"
                        className="text-linear"
                     >
                        {stat.label}
                     </Typography>

                     <Typography
                        variant="heading-5"
                        as="p"
                        className={styles.headingDesktop}
                     >
                        {stat.value}
                     </Typography>
                     <Typography
                        variant="heading-2"
                        as="p"
                        className={styles.headingMobile}
                     >
                        {stat.value}
                     </Typography>
                  </div>
               ))}
            </div>
         </section>
      </Container>
   );
}

export default Stats;
