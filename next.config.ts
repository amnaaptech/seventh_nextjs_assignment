// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React strict mode for highlighting potential problems
  reactStrictMode: true,

  // Images configuration for allowed external sources
  images: {
    domains: ["fakestoreapi.com", "example.com"], // Replace with your image domains
  },

  // Output directory for build files
  output: "standalone",

  // Internationalization support if needed
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
