import configureBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    esmExternals: "loose",
    appDir: true,
  },
};

const withBundleAnalyzer = configureBundleAnalyzer({ enabled: process.env.ANALYZE_BUNDLE === "true" });

export default withBundleAnalyzer(nextConfig);
