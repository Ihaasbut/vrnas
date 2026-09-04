import Newsletter from "@/components/sections/newsletter/Newsletter";
import Stats from "@/components/sections/stats/Stats";
import PageTitle from "@/components/titles/page-title/PageTitle";

import TeamWorkers from "../about/components/team/components/teams/TeamWorkers";

import { TEAM_PAGE_TITLE } from "./TeamContent.consts";

function TeamContent() {
   return (
      <>
         <PageTitle data={TEAM_PAGE_TITLE} />
         <TeamWorkers />
         <Stats />
         <Newsletter />
      </>
   );
}

export default TeamContent;
