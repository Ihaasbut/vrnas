import path from "node:path";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    sassOptions: {
        additionalData: `
          @use "@/assets/styles/mixins.scss" as *,
          @use "${path
              .join(process.cwd(), "src/assets/styles/colors.scss")
              .replace(/\\/g, "/")}" as *;
        `,
    },
};
export default nextConfig;
