/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {unoptimized: true},
  trailingSlash: true,
  devIndicators: false,
  // Pin the workspace root to this app — the old CRA app one level up also
  // has a package-lock.json, which otherwise makes Next.js infer the wrong
  // root and pick up the CRA app's ESLint config.
  outputFileTracingRoot: __dirname
  // This deploys to https://naufaalpane.github.io/ (a user/org root site, not
  // a project subpath), so no basePath/assetPrefix is needed. If this ever
  // moves to a project page (https://naufaalpane.github.io/<repo>/), set
  // basePath: "/<repo>" and assetPrefix: "/<repo>/" at that time.
};

module.exports = nextConfig;
