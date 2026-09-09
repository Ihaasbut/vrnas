import PopularHashtags from "./components/popularHashtags/PopularHashtags";
import RecentArticles from "./components/recentArticles/RecentArticles";
import { SidebarProps } from "./Sidebar.types";

import styles from "./Sidebar.module.scss";

function Sidebar({ currentArticleId }: SidebarProps) {
   return (
      <aside className={styles.sidebar}>
         <RecentArticles currentArticleId={currentArticleId} />
         <PopularHashtags />
      </aside>
   );
}

export default Sidebar;
