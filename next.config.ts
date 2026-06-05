import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    additionalData: `
      @use "@/assets/styles/mixins.scss" as *;
    `,
  },
};

export default nextConfig;
