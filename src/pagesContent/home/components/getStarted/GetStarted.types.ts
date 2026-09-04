import { BlockTitleData } from "@/components/titles/block-title/BlockTitle.types";
import { VideoData } from "@/components/video/video/Video.types";

export type GetStartedData = BlockTitleData & {
   video: VideoData;
   buttonLabel: string;
};
