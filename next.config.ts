import type { NextConfig } from "next";
const nextConfig: NextConfig = {
   /* config options here */
   reactCompiler: true,
   sassOptions: {
      additionalData: `
          @use "@/assets/styles/mixins.scss" as *;
          @use "@/assets/styles/colors.scss" as *;
        `,
   },
};
export default nextConfig;
