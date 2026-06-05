import path from "node:path";
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    reactCompiler: true,
    sassOptions: {
        additionalData: `@use "${path
            .join(process.cwd(), "src/assets/styles/colors.scss")
            .replace(/\\/g, "/")}" as *;`,
    },
};
export default nextConfig;
