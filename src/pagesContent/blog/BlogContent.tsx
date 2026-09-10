import Newsletter from "@/components/sections/newsletter/Newsletter";
import PageTitle from "@/components/titles/page-title/PageTitle";

import Articles from "./components/articles/Articles";
import { BLOG_PAGE_TITLE } from "./BlogContent.consts";

function BlogContent() {
   return (
      <>
         <PageTitle data={BLOG_PAGE_TITLE} />
         <Articles />
         <Newsletter />
      </>
   );
}

export default BlogContent;
