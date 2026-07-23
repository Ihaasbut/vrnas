import Container from "@/components/ui/container/Container";
import Typography from "@/components/ui/typography/Typography";
import { useClientBreakpoint } from "@/hooks/useClientBreakpoint";

import { STATS_DATA_CONFIG } from "./Stats.consts";
import { StatsEl } from "./Stats.types";

import styles from "./Stats.module.scss";

function Stats() {
   const { isDesktop } = useClientBreakpoint();
   const currentHeading = !isDesktop ? "heading-2" : "heading-5";

   return (
      <Container>
         <section className={styles.statsWrapper}>
            <div className={styles.statsList}>
               {STATS_DATA_CONFIG.map((stat: StatsEl) => (
                  <div key={stat.label} className={styles.stat}>
                     <Typography
                        variant="caption-1"
                        as="span"
                        className="text-linear"
                     >
                        {stat.label}
                     </Typography>

                     <Typography variant={currentHeading} as="p">
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
