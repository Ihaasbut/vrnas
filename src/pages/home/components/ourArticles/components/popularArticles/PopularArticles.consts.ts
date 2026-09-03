import articleImage1 from "@/assets/images/home/articles/1.webp";
import articleImage2 from "@/assets/images/home/articles/2.webp";
import articleImage3 from "@/assets/images/home/articles/3.webp";
import articleImage4 from "@/assets/images/home/articles/4.webp";

import { PopularArticle } from "./PopularArticles.types";

export const POPULAR_ARTICLES_DATA: PopularArticle[] = [
   {
      id: 1,
      image: articleImage1,
      tag: "VR Games",
      title: "Entertainment Goes Virtual: The Rise of VR Gaming",
      link: "/blog/vr-gaming",
   },
   {
      id: 2,
      image: articleImage2,
      tag: "VR Architecture",
      title: "Bringing Designs to Life: How VR is Changing Architecture",
      link: "/blog/vr-architecture",
   },
   {
      id: 3,
      image: articleImage3,
      tag: "VR Entertainment",
      title: "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
      link: "/blog/vr-entertainment",
   },
   {
      id: 4,
      image: articleImage4,
      tag: "VR Event",
      title: "Exploring New Worlds: The Benefits of VR Travel",
      link: "/blog/vr-travel",
   },
];
