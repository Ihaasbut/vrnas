import aboutUsManImage from "@/assets/images/home/aboutUsHome/about-us-man.webp";
import getStartedVideoImage from "@/assets/images/home/getStarted/get-started-video.webp";
import heroVideoImage from "@/assets/images/home/hero/hero-video.webp";
import whyChooseUsImage from "@/assets/images/home/whyChooseUs/why-choose-us-home.webp";
import manInCircleImage from "@/assets/images/man-in-circle.webp";
import ourPricingManImage from "@/assets/images/our-pricing-man.webp";

import { WindowScrollArticle } from "./WindowScroll.types";

export const WINDOW_SCROLL_DATA: WindowScrollArticle[] = [
   {
      id: 1,
      image: heroVideoImage,
      tag: "VR Education",
      title: "The Future of Education: How VR is Revolutionizing the Classroom",
      link: "/blog/vr-education-classroom",
   },
   {
      id: 2,
      image: whyChooseUsImage,
      tag: "VR Architecture",
      title: "Bringing Designs to Life: How VR is Changing Architecture",
      link: "/blog/vr-architecture",
   },
   {
      id: 3,
      image: aboutUsManImage,
      tag: "VR Entertainment",
      title: "Immersive Gaming: The Rise of VR Entertainment Experiences",
      link: "/blog/vr-entertainment",
   },
   {
      id: 4,
      image: getStartedVideoImage,
      tag: "VR Education",
      title: "How VR is Transforming Training and Skill Development",
      link: "/blog/vr-training",
   },
   {
      id: 5,
      image: ourPricingManImage,
      tag: "VR Architecture",
      title: "Virtual Walkthroughs: Selling Spaces Before They're Built",
      link: "/blog/virtual-walkthroughs",
   },
   {
      id: 6,
      image: manInCircleImage,
      tag: "VR Entertainment",
      title: "Beyond Gaming: New Frontiers in VR Storytelling",
      link: "/blog/vr-storytelling",
   },
   {
      id: 7,
      image: heroVideoImage,
      tag: "VR Education",
      title: "Remote Learning Reimagined with Virtual Reality Classrooms",
      link: "/blog/remote-vr-learning",
   },
];
