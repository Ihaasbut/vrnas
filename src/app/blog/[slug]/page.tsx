import { notFound } from "next/navigation";

import ArticleDetailContent from "@/pagesContent/articleDetail/ArticleDetailContent";
import { ARTICLES_DATA } from "@/pagesContent/blog/components/articles/Articles.consts";

type BlogArticlePageProps = PageProps<"/blog/[slug]">;

export default async function BlogArticlePage({
   params,
}: BlogArticlePageProps) {
   const { slug } = await params;
   const article = ARTICLES_DATA.find((item) => item.link === `/blog/${slug}`);

   if (!article) {
      notFound();
   }

   return <ArticleDetailContent article={article} />;
}
