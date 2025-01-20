import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias["images"] = path.join(
      process.cwd(),
      "public",
      "assets",
      "images"
    );
    return config;
  },
};

export default nextConfig;
